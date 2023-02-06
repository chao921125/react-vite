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

// * Menu
declare namespace Menu {
	interface MenuOptions {
		path: string;
		title: string;
		icon?: string;
		isLink?: string;
		close?: boolean;
		children?: MenuOptions[];
	}
}

// * Dropdown MenuInfo
declare interface MenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
