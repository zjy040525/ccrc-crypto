import { expect, it } from 'vitest'
import { Crypto } from '../src'

it('crypto', async () => {
  const crypto = new Crypto('1234567890123456')
  expect(await crypto.encrypt('123456')).toBe('yXVUkR45PFz0UfpbDB8/ew==')
})
