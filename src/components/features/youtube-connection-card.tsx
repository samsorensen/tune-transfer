import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle, Info, Shield } from 'lucide-react'
import { YouTubeMusicIcon } from '@/components/ui/icons'
import { ConnectionStatus } from '@/services'

interface YouTubeConnectionCardProps {
  connectionStatus: ConnectionStatus
  onStatusChange: (status: ConnectionStatus) => void
}

export function YouTubeConnectionCard({ connectionStatus, onStatusChange }: YouTubeConnectionCardProps) {
  const handleConnect = async () => {
    onStatusChange('connecting')
    // TODO: Implement YouTube OAuth flow
    setTimeout(() => {
      onStatusChange('idle')
    }, 1000)
  }

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-red-600" />
          Secure Connection
        </CardTitle>
        <CardDescription>We use Google's official OAuth to securely access your YouTube Music account.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center gap-3 p-4 bg-red-50 rounded-lg border border-red-200">
            <CheckCircle className="w-5 h-5 text-red-600" />
            <div>
              <p className="font-medium text-red-900">Write access</p>
              <p className="text-sm text-red-700">We'll create playlists and add tracks to your account</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <Shield className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-medium text-blue-900">Secure OAuth</p>
              <p className="text-sm text-blue-700">Uses Google's official authentication system</p>
            </div>
          </div>

          <div className="flex items-center gap-3 p-4 bg-orange-50 rounded-lg border border-orange-200">
            <Info className="w-5 h-5 text-orange-600" />
            <div>
              <p className="font-medium text-orange-900">What we access</p>
              <p className="text-sm text-orange-700">Ability to create and manage playlists in YouTube Music</p>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <Button
            size="lg"
            className="w-full bg-red-50 border border-red-600 text-red-600 hover:bg-red-100 hover:border-red-700 hover:text-red-700"
            onClick={handleConnect}
            disabled={connectionStatus === 'connecting'}>
            <YouTubeMusicIcon className="w-5 h-5 mr-2" />
            {connectionStatus === 'connecting' ? 'Connecting...' : connectionStatus === 'success' ? 'Connected' : 'Connect with YouTube Music'}
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
