import { describe, it, expect } from 'vitest'
import { generateRandomString, sha256, base64encode } from '@/lib/utils'

describe('generateRandomString', () => {
  it('generates a string of the specified length', () => {
    const result = generateRandomString(32)
    expect(result).toHaveLength(32)
  })
})

describe('sha256', () => {
  it('returns a 32-byte hash', async () => {
    const result = await sha256('test')
    expect(result.byteLength).toBe(32)
  })
})

describe('base64encode', () => {
  it('encodes ArrayBuffer to URL-safe base64', async () => {
    const buffer = await sha256('test')
    const result = base64encode(buffer)
    expect(result).not.toContain('=')
    expect(result).not.toContain('+')
    expect(result).not.toContain('/')
  })
})
