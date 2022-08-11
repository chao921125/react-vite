// VITE 配置
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
	VITE_PUBLIC_PATH: string;
	VITE_NODE_ENV: string;
	VITE_APP_PORT: number;
	VITE_APP_OPEN: boolean;
	VITE_APP_PROXY: string[];
	VITE_APP_BASE_URL: string;
	VITE_APP_MOCK: boolean;
	VITE_APP_MOCK_PATH: string;
	VITE_APP_GZIP: boolean;
}
