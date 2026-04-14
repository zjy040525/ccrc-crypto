import { defineConfig } from 'tsdown'
import ApiSnapshot from 'tsnapi/rolldown'

export default defineConfig({
  dts: {
    tsgo: true,
  },
  exports: true,
  target: 'esnext',
  platform: 'neutral',
  publint: true,
  attw: {
    profile: 'esm-only',
  },
  plugins: [
    ApiSnapshot(),
  ],
})
