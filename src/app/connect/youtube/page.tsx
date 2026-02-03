'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Header } from '@/components/ui/header'
import { useState } from 'react'
import { YouTubeConnectionCard } from '@/components/features/youtube-connection-card'
import { YouTubeHeader } from '@/components/features/youtube-header'
import { ConnectionStatus } from '@/services'

export default function ConnectYouTubePage() {
  const [connectionStatus, setConnectionStatus] = useState<ConnectionStatus>('idle')

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50">
      <Header
        navigationLinks={
          <Link href="/playlists" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Back to Playlists
          </Link>
        }
      />

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <YouTubeHeader />
          <YouTubeConnectionCard connectionStatus={connectionStatus} onStatusChange={setConnectionStatus} />
        </div>
      </div>
    </div>
  )
}
