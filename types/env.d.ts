// VITE 配置
declare type Recordable<T = any> = Record<string, T>;

declare interface ViteEnv {
	VITE_PUBLIC_PATH: string;
	VITE_NODE_ENV: string;
	VITE_TITLE: string;
	VITE_PORT: number;
	VITE_OPEN: boolean;
	VITE_PROXY: string[];
	VITE_BASE_URL: string;
	VITE_MOCK: boolean;
	VITE_MOCK_PATH: string;
	VITE_GZIP: boolean;
	VITE_DROP_LOG: boolean;
}
