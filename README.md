# CCRC Crypto

ccrc 系统加密/解密工具库, 基于 Web Crypto API 实现.

## 兼容性

| 版本 | 实现方式                                                                    | npm dist-tag | 状态   |
| ---- | --------------------------------------------------------------------------- | ------------ | ------ |
| 2.x  | [Web Crypto API](https://developer.mozilla.org/docs/Web/API/Web_Crypto_API) | `latest`     | 活跃   |
| 1.x  | [crypto-js](https://www.npmjs.com/package/crypto-js)                        | `legacy`     | 维护中 |

> 推荐使用 2.x 版本, 因为它使用了现代浏览器都支持的 Web Crypto API, 提供更好的性能和安全性, 并且相比 1.x 可以有效减少包大小.

## Development

- Install dependencies:

```bash
pnpm install
```

- Run the unit tests:

```bash
pnpm run test
```

- Build the library:

```bash
pnpm run build
```
