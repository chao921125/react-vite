import { defineConfig, loadEnv } from "vite";
import type { UserConfig, ConfigEnv } from "vite";
import react from "@vitejs/plugin-react";
// import react from "@vitejs/plugin-react-swc";
import * as path from "path";
// 构建 压缩
import viteCompression from "vite-plugin-compression";
import { createHtmlPlugin } from "vite-plugin-html";
// 图表
import svgr from "vite-plugin-svgr";
// 模拟数据
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
			react({ include: /\.(mdx|js|jsx|ts|tsx)$/ }),
			svgr({
				include: "**/*.svg",
			}),
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
					mockPath: envConfig.VITE_MOCK_PATH,
					watchFiles: false,
					enable: envConfig.VITE_MOCK,
					logger: envConfig.VITE_MOCK,
				}),
		],
		define: {
			// "process.env": process.env,
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
