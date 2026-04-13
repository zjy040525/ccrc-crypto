import { defineConfig } from 'tsdown'

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
})
