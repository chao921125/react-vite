import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import reactRefresh from "@vitejs/plugin-react-refresh";
import svgr from "vite-plugin-svgr";
import viteEslint from "vite-plugin-eslint";
import viteCompression from "vite-plugin-compression";
import * as path from "path";
import { viteMockServe } from "vite-plugin-mock";

const vars = path.resolve("./assets/styles/var.scss");

function pathResolve(dir: string) {
	return path.resolve(__dirname, ".", dir);
}

// https://vitejs.dev/config/
export default defineConfig(({ command }: any) => {
	return {
		server: {
			open: true,
			proxy: {
				"/api": {
					target: "http://127.0.0.1:9501",
					changeOrigin: true,
					rewrite: (path: string) => path.replace(/^\/backend/, "backend"),
				},
			},
		},
		plugins: [
			react(),
			reactRefresh(),
			svgr(),
			viteEslint(),
			viteCompression({
				verbose: true,
				disable: false, // 不禁用压缩
				deleteOriginFile: false, // 压缩后是否删除原文件
				threshold: 10240, // 压缩前最小文件大小
				algorithm: "gzip", // 压缩算法
				ext: ".gz", // 文件类型
			}),
			viteMockServe({
				supportTs: false,
				mockPath: "mock",
				localEnabled: command === "serve",
				prodEnabled: prodMock,
				injectCode: `
			  import { setupProdMockServer } from './mockProdServer';
			  setupProdMockServer();
			`,
				logger: true,
			}),
		],
		resolve: {
			alias: [
				{
					// /@/xxxx  =>  src/xxx
					find: /^~/,
					replacement: pathResolve("node_modules") + "/",
				},
				{
					// /@/xxxx  =>  src/xxx
					find: /@\//,
					replacement: pathResolve("src") + "/",
				},
			],
		},
		css: {
			// modules: "",
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
					globalVars: {
						hack: `true; @import '${vars}'`,
					},
					// additionalData: `$injectedColor: orange`
				},
				scss: {
					javascriptEnabled: true,
					additionalData: `@import "@/assets/styles/global.scss";`,
				},
			},
		},
		build: {
			brotliSize: false,
			rollupOptions: {
				output: {
					entryFileNames: "assets/[name].js",
					chunkFileNames: "assets/[name].js",
					assetFileNames: "assets/[name].[ext]",
				},
			},
		},
	};
});
