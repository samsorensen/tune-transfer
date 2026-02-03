import Link from 'next/link'
import { Header } from '@/components/ui/header'
import { Hero } from '@/components/ui/hero'
import { HowItWorks } from '@/components/ui/how-it-works'
import { Stats } from '@/components/ui/stats'
import { CTA } from '@/components/ui/cta'
import { Footer } from '@/components/ui/footer'

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-red-50">
      <Header
        navigationLinks={
          <>
            <Link href="#features" className="text-gray-600 hover:text-gray-900">
              Features
            </Link>
            <Link href="#how-it-works" className="text-gray-600 hover:text-gray-900">
              How it Works
            </Link>
            <Link href="#pricing" className="text-gray-600 hover:text-gray-900">
              Pricing
            </Link>
          </>
        }
      />
      <Hero />
      <HowItWorks />
      <Stats />
      <CTA />
      <Footer />
    </div>
  )
}
