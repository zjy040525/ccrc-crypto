import { expect, it } from 'vitest'
import Crypto from '../src/index'

it('should encrypt and decrypt a pwd', () => {
  const crypto = new Crypto('1234567890abcdef1234567890abcdef', '')
  const pwd = 'my-password'
  const encrypted = crypto.encrypt(pwd)
  const decrypted = crypto.decrypt(encrypted)
  expect(decrypted).toBe(pwd)
})
