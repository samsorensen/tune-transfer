import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Music, Shield, CheckCircle, AlertCircle, Info } from "lucide-react"
import Link from "next/link"
import SpotifyIcon from "@/components/ui/icons"

export default function ConnectSpotifyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Music className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold">Tune Transfer</span>
          </div>
          <Link href="/" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          {/* Page Header */}
          <div className="text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <SpotifyIcon className="text-green-500 text-4xl" />
              <h1 className="text-3xl font-bold text-gray-900">Connect Your Spotify Account</h1>
            </div>
            <p className="text-gray-600 text-lg">
              Connect your Spotify account to start transferring your playlists to YouTube Music
            </p>
          </div>

          {/* Connection Card */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-600" />
                Secure Connection
              </CardTitle>
              <CardDescription>
                We use Spotify's official OAuth to securely access your account. Your credentials are never stored.
              </CardDescription>
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
                    <p className="text-sm text-blue-700">Uses Spotify's official authentication system</p>
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
                >
                  <SpotifyIcon className="w-5 h-5 mr-2" />
                  Connect with Spotify
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
} 