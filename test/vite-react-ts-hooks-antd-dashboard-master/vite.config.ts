import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import reactRefresh from '@vitejs/plugin-react-refresh'
import path, { resolve } from 'path'
import viteCompression from 'vite-plugin-compression'
const vars = path.resolve('./src/styles/var.less')
import svgr from 'vite-plugin-svgr'

function pathResolve(dir: string) {
  return resolve(__dirname, '.', dir)
}
export default defineConfig({
  base: './',
  plugins: [
    svgr(),
    react(),
    reactRefresh(), // 热更新
    viteCompression({
      verbose: true,
      disable: false, // 不禁用压缩
      deleteOriginFile: false, // 压缩后是否删除原文件
      threshold: 10240, // 压缩前最小文件大小
      algorithm: 'gzip', // 压缩算法
      ext: '.gz' // 文件类型
    })
  ],
  resolve: {
    alias: [
      {
        // /@/xxxx  =>  src/xxx
        find: /^~/,
        replacement: pathResolve('node_modules') + '/'
      },
      {
        // /@/xxxx  =>  src/xxx
        find: /@\//,
        replacement: pathResolve('src') + '/'
      }
    ]
  },
  css: {
    modules: {
      localsConvention: 'camelCase'
    },
    preprocessorOptions: {
      less: {
        modifyVars: {},
        javascriptEnabled: true,
        globalVars: {
          hack: `true; @import '${vars}'`
        }
      }
    }
  },
  build: {
    rollupOptions: {
      output: {
        entryFileNames: 'assets/[name].js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: 'assets/[name].[ext]'
      }
    }
  },
  server: {
    proxy: {
      '/backend': {
        target: 'http://127.0.0.1:9501',
        changeOrigin: true,
        rewrite: (path: string) => path.replace(/^\/backend/, 'backend')
      }
    }
  }
})
