import type { UserConfig, ConfigEnv } from "vite";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import viteEslint from "vite-plugin-eslint";
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
import * as path from "path";
import { viteMockServe } from "vite-plugin-mock";
// @ts-ignore
import { getEnvConfig } from "./build";

// https://vitejs.dev/config/
export default defineConfig(({ mode }: ConfigEnv): UserConfig => {
	const envConfig = getEnvConfig(loadEnv(mode, process.cwd()));
	// const isBuild = command.includes("build");
	return {
		server: {
			open: envConfig.VITE_OPEN,
			port: envConfig.VITE_PORT,
			proxy: {
				"/api": {
					target: "http://127.0.0.1:8080",
					changeOrigin: true,
					rewrite: (path: string) => path.replace(/^\/api/, ""),
				},
			},
		},
		plugins: [
			react({
				fastRefresh: true,
			}),
			svgr(),
			viteEslint(),
			createHtmlPlugin({
				inject: {
					data: {
						title: envConfig.VITE_TITLE,
					},
				},
			}),
			envConfig.VITE_GZIP &&
				viteCompression({
					verbose: true,
					disable: false, // 不禁用压缩
					deleteOriginFile: false, // 压缩后是否删除原文件
					threshold: 10240, // 压缩前最小文件大小
					algorithm: "gzip", // 压缩算法
					ext: ".gz", // 文件类型
				}),
			envConfig.VITE_MOCK &&
				viteMockServe({
					supportTs: false,
					mockPath: envConfig.VITE_MOCK_PATH,
					localEnabled: envConfig.VITE_MOCK,
					prodEnabled: false,
					injectCode: `
			  import { setupProdMockServer } from './mockProdServer';
			  setupProdMockServer();
			`,
					logger: true,
				}),
		],
		define: {
			"process.env": process.env,
		},
		resolve: {
			extensions: [".mjs", ".js", ".jsx", ".ts", ".tsx", ".json", ".sass", ".scss", ".less"], // 忽略输入的扩展名
			alias: [
				{ find: /^~/, replacement: "" },
				{ find: "@", replacement: path.resolve(__dirname, "src") },
			],
		},
		css: {
			// modules: "",
			// 打开此处 postcss.config.js失效
			postcss: {
				plugins: [],
			},
			modules: {
				localsConvention: "camelCase",
			},
			preprocessorOptions: {
				css: { charset: false },
				less: {
					modifyVars: {},
					javascriptEnabled: true,
					// additionalData: `$injectedColor: orange`
				},
				scss: {
					javascriptEnabled: true,
					additionalData: `@import "@/assets/styles/global.scss";`,
				},
			},
		},
		esbuild: {
			pure: envConfig.VITE_DROP_LOG ? ["console.log", "debugger"] : [],
		},
		build: {
			minify: "terser",
			chunkSizeWarningLimit: 5000,
			terserOptions: {
				//detail to look https://terser.org/docs/api-reference#compress-options
				compress: {
					drop_console: false,
					pure_funcs: ["console.log", "console.info"],
					drop_debugger: true,
				},
			},
			rollupOptions: {
				output: {
					chunkFileNames: "assets/js/[name]-[hash].js",
					entryFileNames: "assets/js/[name]-[hash].js",
					assetFileNames: "assets/[ext]/[name]-[hash].[ext]",
					compact: true,
				},
			},
		},
	};
});
