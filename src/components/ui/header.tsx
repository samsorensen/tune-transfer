import Link from 'next/link'
import { Music } from 'lucide-react'

interface HeaderProps {
  navigationLinks?: React.ReactNode
}

export function Header({ navigationLinks }: HeaderProps) {
  return (
    <header className="border-b bg-gray-100/80 backdrop-blur-sm sticky top-0 z-50">
      <div className="px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-red-500 to-blue-500 rounded-lg flex items-center justify-center">
            <Music className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold">Tune Transfer</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">{navigationLinks}</nav>
      </div>
    </header>
  )
}
