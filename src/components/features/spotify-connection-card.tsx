import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Info, Shield } from 'lucide-react'
import { SpotifyIcon } from '@/components/ui/icons'
import { requestUserAuthorization, ConnectionStatus } from '@/services'

interface SpotifyConnectionCardProps {
  connectionStatus: ConnectionStatus
  onStatusChange: (status: ConnectionStatus) => void
}

export function SpotifyConnectionCard({ connectionStatus, onStatusChange }: SpotifyConnectionCardProps) {
  const handleConnect = async () => {
    onStatusChange('connecting')
    try {
      await requestUserAuthorization()
    } catch (error) {
      console.error('Spotify connection failed:', error)
      onStatusChange('error')
    }
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-green-600" />
          Secure Connection
        </CardTitle>
        <CardDescription>We use Spotify&apos;s official OAuth to securely access your account. Your credentials are never stored.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-green-50 rounded-lg border border-green-200">
            <CheckCircle className="w-5 h-5 text-green-600" />
            <div>
              <p className="font-medium text-green-900">Read-only access</p>
              <p className="text-sm text-green-700">We can only read your playlists, not modify them</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <Shield className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-blue-900">Secure OAuth</p>
              <p className="text-sm text-blue-700">Uses Spotify&apos;s official authentication system</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <Info className="w-5 h-5 text-orange-600" />
            <div>
              <p className="font-medium text-orange-900">What we access</p>
              <p className="text-sm text-orange-700">Your playlists, saved tracks, and profile information</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            size="lg"
            className="w-full bg-green-600 hover:bg-green-700 text-white"
            onClick={handleConnect}
            disabled={connectionStatus === 'connecting'}>
            <SpotifyIcon className="w-5 h-5 mr-2" />
            {connectionStatus === 'connecting' ? 'Connecting...' : connectionStatus === 'success' ? 'Connected' : 'Connect with Spotify'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
