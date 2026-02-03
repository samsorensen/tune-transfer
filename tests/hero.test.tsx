import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Hero } from '@/components/ui/hero'

describe('Hero', () => {
  it('displays the main headline', () => {
    render(<Hero />)
    expect(screen.getByText(/Move Your Music/)).toBeDefined()
    expect(screen.getByText(/Keep Your Vibe/)).toBeDefined()
  })

  it('shows the Start Transfer button', () => {
    render(<Hero />)
    expect(screen.getAllByText('Start Transfer').length).toBeGreaterThan(0)
  })

  it('shows platform names', () => {
    render(<Hero />)
    expect(screen.getAllByText('Spotify').length).toBeGreaterThan(0)
    expect(screen.getAllByText('YouTube Music').length).toBeGreaterThan(0)
  })
})
