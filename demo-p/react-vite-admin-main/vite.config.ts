import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';
import { ConfigEnv, loadEnv, UserConfig } from 'vite';
import { AntdResolve, createStyleImportPlugin } from 'vite-plugin-style-import';
import windiCSS from 'vite-plugin-windicss';
import lessToJS from 'less-vars-to-js';
import { createHtmlPlugin } from 'vite-plugin-html';
const themeVariables = lessToJS(
  fs.readFileSync(path.resolve(__dirname, './src/assets/styles/variables.less'), 'utf8'),
);
export default ({ command, mode }: ConfigEnv): UserConfig => {
  const isBuild = command === 'build';
  const root = process.cwd();
  const env = loadEnv(mode, root);
  const { VITE_PORT, VITE_HTTP_API, VITE_APP_TITLE } = env;
  return {
    base: '/',
    publicDir: 'public',
    plugins: [
      react(),
      createStyleImportPlugin({
        resolves: [AntdResolve()],
      }),
      windiCSS(),
      createHtmlPlugin({
        inject: {
          data: {
            title: VITE_APP_TITLE,
          },
        },
      }),
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
    css: {
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]',
        hashPrefix: 'prefix',
      },
      preprocessorOptions: {
        less: {
          javascriptEnabled: true,
          modifyVars: themeVariables,
        },
      },
    },
    json: {
      namedExports: true,
      stringify: false,
    },
    clearScreen: false,
    logLevel: 'info',
    server: {
      open: true,
      host: '0.0.0.0',
      port: Number(VITE_PORT),
      proxy: {
        '/api': {
          target: VITE_HTTP_API,
          changeOrigin: true,
        },
      },
    },
    build: {
      target: 'es2015',
      outDir: 'build',
      cssCodeSplit: true,
      sourcemap: false,
      minify: 'terser',
      chunkSizeWarningLimit: 600,
      rollupOptions: {
        output: {
          manualChunks: {
            'react-dom': ['react-dom'],
            moment: ['moment'],
          },
        },
      },
      terserOptions: {
        compress: {
          keep_infinity: true,
          drop_console: isBuild,
        },
      },
    },
  };
};
