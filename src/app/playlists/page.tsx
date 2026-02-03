'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { SpotifyIcon, YouTubeMusicIcon } from '@/components/ui/icons'

interface Playlist {
  id: string
  name: string
  description: string | null
  images: { url: string }[]
  tracks: { total: number }
  owner: { display_name: string }
  external_urls: { spotify: string }
}

interface PlaylistsResponse {
  items: Playlist[]
  total: number
}

export default function PlaylistsPage() {
  const router = useRouter()
  const [playlists, setPlaylists] = useState<Playlist[]>([])
  const [total, setTotal] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    fetch('/api/spotify/playlists')
      .then(res => {
        if (res.status === 401) {
          router.push('/connect/spotify')
          return null
        }
        if (!res.ok) throw new Error('Failed to fetch playlists')
        return res.json()
      })
      .then((data: PlaylistsResponse | null) => {
        if (data) {
          setPlaylists(data.items)
          setTotal(data.total)
        }
      })
      .catch(err => setError(err.message))
      .finally(() => setLoading(false))
  }, [router])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4" />
          <p className="text-lg">Loading your playlists...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg text-red-500 mb-4">{error}</p>
          <Button onClick={() => router.push('/connect/spotify')}>
            Reconnect to Spotify
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <SpotifyIcon className="w-8 h-8 text-green-500" />
            <div>
              <h1 className="text-3xl font-bold">Your Spotify Playlists</h1>
              <p className="text-muted-foreground">{total} playlists found</p>
            </div>
          </div>
          <Button
            asChild
            className="bg-red-50 border border-red-600 text-red-600 hover:bg-red-100 hover:border-red-700 hover:text-red-700"
          >
            <Link href="/connect/youtube">
              <YouTubeMusicIcon className="w-5 h-5 mr-2" />
              Connect YouTube Music
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {playlists.map(playlist => (
            <Card key={playlist.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="flex">
                {playlist.images[0] ? (
                  <Image
                    src={playlist.images[0].url}
                    alt={playlist.name}
                    width={96}
                    height={96}
                    className="w-24 h-24 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 bg-muted flex items-center justify-center">
                    <SpotifyIcon className="w-8 h-8 text-muted-foreground" />
                  </div>
                )}
                <div className="flex-1 p-4">
                  <h3 className="font-semibold truncate" title={playlist.name}>
                    {playlist.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {playlist.tracks.total} tracks
                  </p>
                  <p className="text-xs text-muted-foreground truncate">
                    by {playlist.owner.display_name}
                  </p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {playlists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No playlists found in your account.</p>
          </div>
        )}
      </div>
    </div>
  )
}
