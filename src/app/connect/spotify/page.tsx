'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/ui/header'
import { useState, useEffect } from 'react'
import { SpotifyConnectionCard } from '@/components/features/spotify-connection-card'
import { SpotifyHeader } from '@/components/features/spotify-header'
import { ConnectionStatus, handleSpotifyCallback, getAccessToken } from '@/services'
import { useSearchParams } from 'next/navigation'

export default function ConnectSpotifyPage() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('idle')
  const searchParams = useSearchParams()

  useEffect(() => {
    const handleCallback = async () => {
      const code = searchParams.get('code')
      const error = searchParams.get('error')

      if (error) {
        console.error('Spotify authorization error:', error)
        setConnectionStatus('error')
        return
      }

      if (code && connectionStatus !== 'success') {
        setConnectionStatus('connecting')
        try {
          await getAccessToken(code)
          setConnectionStatus('success')
        } catch (error) {
          console.error('Token exchange failed:', error)
          setConnectionStatus('error')
        }
      }
    }

    handleCallback()
  }, [searchParams])

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      <Header
        navigationLinks={
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        }
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <SpotifyHeader />
          {connectionStatus === 'success' && <div className="text-green-600 font-medium text-center mb-8">Connected to Spotify</div>}
          <SpotifyConnectionCard connectionStatus={connectionStatus} onStatusChange={setConnectionStatus} />
        </div>
      </div>
    </div>
  )
}
