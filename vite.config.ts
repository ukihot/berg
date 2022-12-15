import { defineConfig } from 'vite'
import solidPlugin from 'vite-plugin-solid'
import { internalIpV4 } from 'internal-ip'

export default defineConfig(async () => {
  const config = {
    plugins: [solidPlugin()],
    server: {
      port: 3000,
      host: true,
      strictPort: true,
      hmr: {
        protocol: "ws",
        host: await internalIpV4(),
        port: 5183,
      },
    },
    build: {
      target: "esnext",
    }
  }
  return config
})