import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from './button'

export function CTA() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-red-500 to-blue-500">
      <div className="container mx-auto text-center text-white">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transfer Your Music?</h2>
        <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
          Join thousands of music lovers who have successfully moved their playlists. Start your transfer today and keep your music collection intact.
        </p>
        <Link href="/connect/spotify">
          <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100">
            Start Free Transfer
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  )
}
