export class Crypto {
  key: string
  iv: string

  constructor(key: string, iv: string = '') {
    this.key = key
    this.iv = iv
  }

  private getIvBuffer(): Uint8Array {
    const enc = new TextEncoder()
    const encoded = enc.encode(this.iv)
    const ivBuffer = new Uint8Array(16)
    // 截取最多16字节填入，不足则补0
    ivBuffer.set(encoded.slice(0, 16))
    return ivBuffer
  }

  private async importKey(): Promise<CryptoKey> {
    const enc = new TextEncoder()
    return crypto.subtle.importKey(
      'raw',
      enc.encode(this.key),
      'AES-CBC',
      false,
      ['encrypt', 'decrypt'],
    )
  }

  async encrypt(word: string): Promise<string> {
    const enc = new TextEncoder()
    const key = await this.importKey()
    const iv = this.getIvBuffer()
    const data = enc.encode(word)

    const encrypted = await crypto.subtle.encrypt(
      {
        name: 'AES-CBC',
        iv: iv as BufferSource,
      },
      key,
      data as BufferSource,
    )

    // Convert ArrayBuffer to Base64
    return btoa(String.fromCharCode(...new Uint8Array(encrypted as ArrayBuffer)))
  }

  async decrypt(word: string): Promise<string> {
    const key = await this.importKey()
    const iv = this.getIvBuffer()
    // Convert Base64 to ArrayBuffer
    const data = Uint8Array.from(atob(word), c => c.charCodeAt(0))

    const decrypted = await crypto.subtle.decrypt(
      {
        name: 'AES-CBC',
        iv: iv as BufferSource,
      },
      key,
      data as BufferSource,
    )

    const dec = new TextDecoder()
    return dec.decode(decrypted as ArrayBuffer)
  }
}
