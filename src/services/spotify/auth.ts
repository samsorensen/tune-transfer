'use server'

import { generateRandomString, sha256, base64encode } from '@/lib/utils'
import { TokenResponse, TokenRequestPayload } from './types'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'
import { env } from '@/config/env'

const clientId = env.spotify.clientId
const redirectUri = env.spotify.redirectUri

export async function requestUserAuthorization() {
  const codeVerifier = generateRandomString(64)
  const hashed = await sha256(codeVerifier)
  const codeChallenge = base64encode(hashed)
  const state = generateRandomString(16)

  const scope = 'playlist-read-private'
  const authUrl = new URL('https://accounts.spotify.com/authorize')

  const cookieStore = await cookies()
  cookieStore.set('code_verifier', codeVerifier, {
    httpOnly: true,
    secure: env.nodeEnv !== 'development',
    sameSite: 'lax',
    maxAge: 60 * 10 // 10 minutes
  })
  cookieStore.set('oauth_state', state, {
    httpOnly: true,
    secure: env.nodeEnv !== 'development',
    sameSite: 'lax',
    maxAge: 60 * 10
  })

  const params = {
    response_type: 'code',
    client_id: clientId,
    scope,
    code_challenge_method: 'S256',
    code_challenge: codeChallenge,
    redirect_uri: redirectUri,
    state
  }

  authUrl.search = new URLSearchParams(params).toString()
  redirect(authUrl.toString())
}

export async function getAccessToken(code: string, state: string) {
  const cookieStore = await cookies()

  const storedState = cookieStore.get('oauth_state')?.value
  if (!storedState || storedState !== state) {
    throw new Error('State mismatch: possible CSRF attack')
  }
  cookieStore.delete('oauth_state')

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
    secure: env.nodeEnv !== 'development',
    sameSite: 'lax',
    maxAge: tokenData.expires_in
  })

  cookieStore.delete('code_verifier')

  if (tokenData.refresh_token) {
    cookieStore.set('refresh_token', tokenData.refresh_token, {
      httpOnly: true,
      secure: env.nodeEnv !== 'development',
      sameSite: 'lax'
    })
  }

  return { success: true }
}
