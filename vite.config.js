import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path'
// https://vitejs.dev/config/
export default ({ mode }) => {
  return defineConfig(
    {
      base: "./",
      plugins: [vue()],
      resolve: {
        alias: {
          '@': resolve(__dirname, 'src'),
        },
      },
      css: {

      },
      server: {
        open: true,
      },
      build: {
        outDir: 'dist',
        assetsDir: 'statics',
        proxy: {
          // 使用 proxy 实例
          // '/api': {
          //   target: 'XXXX',
          //   changeOrigin: true,
          //   configure: (proxy, options) => {
          //   }
          // },
        }
      }
    }
  )
}
