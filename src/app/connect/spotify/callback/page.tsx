'use client'

import { Suspense, useEffect, useState } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { getAccessToken } from '@/services/spotify/auth'

function CallbackContent() {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading')
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const code = searchParams.get('code')
    const errorParam = searchParams.get('error')

    if (errorParam) {
      setStatus('error')
      setError(errorParam)
      return
    }

    if (!code) {
      setStatus('error')
      setError('No authorization code received')
      return
    }

    // Exchange code for token
    getAccessToken(code)
      .then(() => {
        setStatus('success')
        setTimeout(() => router.push('/playlists'), 1500)
      })
      .catch(err => {
        setStatus('error')
        setError(err.message)
      })
  }, [searchParams, router])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        {status === 'loading' && (
          <>
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4" />
            <p className="text-lg">Connecting to Spotify...</p>
          </>
        )}
        {status === 'success' && (
          <>
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <p className="text-lg">Connected! Redirecting...</p>
          </>
        )}
        {status === 'error' && (
          <>
            <div className="text-red-500 text-5xl mb-4">✗</div>
            <p className="text-lg text-red-500">{error}</p>
          </>
        )}
      </div>
    </div>
  )
}

export default function SpotifyCallbackPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4" />
            <p className="text-lg">Loading...</p>
          </div>
        </div>
      }
    >
      <CallbackContent />
    </Suspense>
  )
}
