import SpotifyIcon from '@/components/ui/icons'

export function SpotifyHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <SpotifyIcon className="text-green-500 text-4xl" />
        <h1 className="text-3xl font-bold text-gray-900">Connect Your Spotify Account</h1>
      </div>
      <p className="text-gray-600 text-lg">Connect your Spotify account to start transferring your playlists to YouTube Music</p>
    </div>
  )
}
