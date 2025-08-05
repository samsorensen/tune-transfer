import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Music, Zap, Shield, Play, ListMusic } from "lucide-react"
import Link from "next/link"
import { FaSpotify } from "react-icons/fa"
import { SiYoutubemusic } from "react-icons/si";

export default function LandingPage() {
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
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">
              How it Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-red-600 to-blue-600 bg-clip-text text-transparent">
            Move Your Music,
            <br />
            Keep Your Vibe
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Seamlessly transfer your playlists from Spotify to YouTube Music in just a few clicks. Don't lose your
            carefully curated music collection when switching platforms.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-gradient-to-r from-red-500 to-blue-500 hover:from-red-600 hover:to-blue-700"
            >
              Start Transfer
              {/* <ArrowRight className="w-5 h-5 ml-2" /> */}
            </Button>
            <Button size="lg" variant="outline">
              {/* <Play className="w-5 h-5 mr-2" /> */}
              Watch Demo
            </Button>
          </div>

          {/* Platform Icons */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="flex items-center gap-3">
              <FaSpotify className="text-green-500 text-3xl" />
              <span className="text-md font-medium text-gray-700">Spotify</span>
            </div>
            <div className="flex items-center gap-2">
              <ArrowRight className="text-gray-400 w-5 h-5" />
            </div>
            <div className="flex items-center gap-3">
              <SiYoutubemusic className="text-red-500 text-3xl" />
              <span className="text-md font-medium text-gray-700">YouTube Music</span>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 bg-gray-50 border-t border-gray-200">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Transfer your playlists in three simple steps. No technical knowledge required.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect Spotify</h3>
              <p className="text-gray-600">
                Sign in to your Spotify account and select the playlists you want to transfer.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Connect YouTube Music</h3>
              <p className="text-gray-600">Link your YouTube Music account where your playlists will be created.</p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Transfer Complete</h3>
              <p className="text-gray-600">
                Sit back and relax while we transfer your playlists. You'll get notified when it's done!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-white border-t border-gray-200">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">0</div>
              <div className="text-gray-600">Songs Transferred</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-red-600 mb-2">0</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">0%</div>
              <div className="text-gray-600">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-blue-500">
        <div className="container mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transfer Your Music?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of music lovers who have successfully moved their playlists. Start your transfer today and
            keep your music collection intact.
          </p>
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Start Free Transfer
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="pt-6 px-4 bg-gray-900 text-white">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <Music className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Tune Transfer</span>
              </div>
              <p className="text-gray-400">
                The easiest way to transfer your playlists between music streaming platforms.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Status
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-5 pt-4 pb-4 text-center text-gray-400">
            <p>&copy; 2024 Tune Transfer. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
