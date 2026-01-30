'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/ui/header'
import { useState } from 'react'
import { SpotifyConnectionCard } from '@/components/features/spotify-connection-card'
import { SpotifyHeader } from '@/components/features/spotify-header'
import { ConnectionStatus } from '@/services'

export default function ConnectSpotifyPage() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('idle')

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
          <SpotifyConnectionCard connectionStatus={connectionStatus} onStatusChange={setConnectionStatus} />
        </div>
      </div>
    </div>
  )
}
