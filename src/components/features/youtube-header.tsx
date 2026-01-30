import { YouTubeMusicIcon } from '@/components/ui/icons'

export function YouTubeHeader() {
  return (
    <div className="text-center mb-8">
      <div className="flex items-center justify-center gap-3 mb-4">
        <YouTubeMusicIcon className="text-red-500 text-4xl w-10 h-10" />
        <h1 className="text-3xl font-bold text-gray-900">Connect Your YouTube Music Account</h1>
      </div>
      <p className="text-gray-600 text-lg">Connect your YouTube Music account to transfer your Spotify playlists</p>
    </div>
  )
}
