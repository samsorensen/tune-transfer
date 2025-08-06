'use server'

import { generateRandomString, sha256, base64encode } from '@/lib/utils'
import { TokenResponse, AuthError, AuthCallbackResult, SpotifyAuthParams, TokenRequestPayload } from './types'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

const clientId = process.env.SPOTIFY_CLIENT_ID!
const redirectUri = process.env.SPOTIFY_REDIRECT_URI!

export async function requestUserAuthorization() {
  const codeVerifier = generateRandomString(64)
  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed)

  const scope = 'playlist-read-private'
  const authUrl = new URL('https://accounts.spotify.com/authorize')

  const cookieStore = await cookies()
  cookieStore.set('code_verifier', codeVerifier, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: 60 * 10 // 10 minutes
  })

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri
  }

  authUrl.search = new URLSearchParams(params).toString()
  redirect(authUrl.toString())
}

export async function handleSpotifyCallback(searchParams: URLSearchParams): Promise<AuthCallbackResult> {
  const code = searchParams.get('code')
  const state = searchParams.get('state')
  const error = searchParams.get('error')
  return { code, state, error }
}

export async function getAccessToken(code: string) {
  const cookieStore = await cookies()
  const codeVerifier = cookieStore.get('code_verifier')?.value

  if (!codeVerifier) {
    throw new Error('Code verifier not found')
  }

  const url = new URL('https://accounts.spotify.com/api/token')

  const payload: TokenRequestPayload = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: new URLSearchParams({
      client_id: clientId,
      grant_type: 'authorization_code',
      code: code,
      redirect_uri: redirectUri,
      code_verifier: codeVerifier
    })
  }

  const response = await fetch(url, payload)

  if (!response.ok) {
    const errorData = await response.json()
    throw new Error(`Token exchange failed: ${errorData.error || response.statusText}`)
  }

  const tokenData = (await response.json()) as TokenResponse

  // Store token in httpOnly cookie
  cookieStore.set('access_token', tokenData.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    maxAge: tokenData.expires_in
  })

  return tokenData
}
