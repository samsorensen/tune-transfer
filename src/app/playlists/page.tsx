'use client'

import { useEffect, useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Search, ArrowLeft } from 'lucide-react'
import { Card } from '@/components/ui/card'
import { Header } from '@/components/ui/header'
import { SpotifyIcon } from '@/components/ui/icons'
import { cn } from '@/lib/utils'

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
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPlaylists = useMemo(
    () =>
      playlists.filter(playlist =>
        playlist.name.toLowerCase().includes(searchQuery.toLowerCase())
      ),
    [playlists, searchQuery]
  )

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
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-red-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-500 mx-auto mb-4" />
          <p className="text-lg">Loading your playlists...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 via-white to-red-50">
        <div className="text-center">
          <p className="text-lg text-red-500 mb-4">{error}</p>
          <button
            onClick={() => router.push('/connect/spotify')}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
          >
            Reconnect to Spotify
          </button>
        </div>
      </div>
    )
  }

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

      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center gap-3 mb-8">
          <SpotifyIcon className="w-8 h-8 text-green-500" />
          <div>
            <h1 className="text-3xl font-bold">Your Spotify Playlists</h1>
            <p className="text-muted-foreground">{total} playlists found</p>
          </div>
        </div>

        <div className="relative max-w-md mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search playlists..."
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-card border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500/50 focus:border-green-500"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredPlaylists.map(playlist => (
            <Card
              key={playlist.id}
              className={cn(
                'overflow-hidden py-0 gap-0 group cursor-pointer',
                'hover:shadow-xl hover:shadow-green-500/10 hover:-translate-y-1 hover:scale-[1.02]',
                'transition-all duration-300'
              )}
            >
              <div className="relative aspect-square overflow-hidden">
                {playlist.images[0] ? (
                  <Image
                    src={playlist.images[0].url}
                    alt={playlist.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div className="w-full h-full bg-muted flex items-center justify-center">
                    <SpotifyIcon className="w-12 h-12 text-muted-foreground" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <h3 className="font-semibold truncate" title={playlist.name}>
                  {playlist.name}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {playlist.tracks.total} tracks · {playlist.owner.display_name}
                </p>
                {playlist.description && (
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {playlist.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>

        {filteredPlaylists.length === 0 && playlists.length > 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No playlists match &ldquo;{searchQuery}&rdquo;
            </p>
          </div>
        )}

        {playlists.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No playlists found in your account.</p>
          </div>
        )}
      </div>
    </div>
  )
}
