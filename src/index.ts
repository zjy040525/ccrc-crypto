import { AES, enc, mode, pad } from 'crypto-js'

export class Crypto {
  key: CryptoJS.lib.WordArray
  iv: CryptoJS.lib.WordArray

  constructor(key: string, iv: string) {
    this.key = enc.Utf8.parse(key)
    this.iv = enc.Utf8.parse(iv)
  }

  encrypt(word: string): string {
    const words = enc.Utf8.parse(word)
    const encrypted = AES.encrypt(words, this.key, {
      iv: this.iv,
      mode: mode.ECB,
      padding: pad.Pkcs7,
    })
    return enc.Base64.stringify(encrypted.ciphertext)
  }

  decrypt(word: string): string {
    const base64 = enc.Base64.parse(word)
    const src = enc.Base64.stringify(base64)

    const decrypt = AES.decrypt(src, this.key, {
      iv: this.iv,
      mode: mode.ECB,
      padding: pad.Pkcs7,
    })
    return enc.Utf8.stringify(decrypt)
  }
}
