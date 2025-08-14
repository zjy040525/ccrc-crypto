import type { lib } from 'crypto-js'
import aes from 'crypto-js/aes.js'
import encBase64 from 'crypto-js/enc-base64.js'
import encUtf8 from 'crypto-js/enc-utf8.js'
import modeEcb from 'crypto-js/mode-ecb.js'
import padPkcs7 from 'crypto-js/pad-pkcs7.js'

class Crypto {
  key: lib.WordArray
  iv: lib.WordArray

  constructor(key: string, iv: string) {
    this.key = encUtf8.parse(key)
    this.iv = encUtf8.parse(iv)
  }

  encrypt(word: string): string {
    const words = encUtf8.parse(word)
    const encrypted = aes.encrypt(words, this.key, {
      iv: this.iv,
      mode: modeEcb,
      padding: padPkcs7,
    })
    return encBase64.stringify(encrypted.ciphertext)
  }

  decrypt(word: string): string {
    const base64 = encBase64.parse(word)
    const src = encBase64.stringify(base64)

    const decrypt = aes.decrypt(src, this.key, {
      iv: this.iv,
      mode: modeEcb,
      padding: padPkcs7,
    })
    return encUtf8.stringify(decrypt)
  }
}

export default Crypto
