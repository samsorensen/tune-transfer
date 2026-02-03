import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from './button'
import { SpotifyIcon, YouTubeMusicIcon } from './icons'

export function Hero() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto text-center max-w-4xl">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
          Move Your Music,
          <br />
          Keep Your Vibe
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Seamlessly transfer your playlists from Spotify to YouTube Music in just a few clicks. Don&apos;t lose your carefully curated music collection
          when switching platforms.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link href="/connect/spotify">
            <Button size="lg" className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-700">
              Start Transfer
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </Link>
          <Button size="lg" variant="outline">
            {/* <Play className="w-5 h-5 mr-2" /> */}
            Watch Demo
          </Button>
        </div>

        {/* Platform Icons */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <div className="flex items-center gap-3">
            <SpotifyIcon className="text-green-500 text-3xl" />
            <span className="text-md font-medium text-gray-700">Spotify</span>
          </div>
          <div className="flex items-center gap-2">
            <ArrowRight className="text-gray-400 w-5 h-5" />
          </div>
          <div className="flex items-center gap-3">
            <YouTubeMusicIcon className="text-red-500 text-3xl" />
            <span className="text-md font-medium text-gray-700">YouTube Music</span>
          </div>
        </div>
      </div>
    </section>
  )
}
