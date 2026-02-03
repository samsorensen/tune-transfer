import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Header } from '@/components/ui/header'

describe('Header', () => {
  it('displays the app name', () => {
    render(<Header />)
    expect(screen.getByText('Tune Transfer')).toBeDefined()
  })

  it('renders navigation links when provided', () => {
    render(
      <Header
        navigationLinks={
          <>
            <a href="#features">Features</a>
            <a href="#pricing">Pricing</a>
          </>
        }
      />
    )
    expect(screen.getByText('Features')).toBeDefined()
    expect(screen.getByText('Pricing')).toBeDefined()
  })
})
