// * Dropdown MenuInfo
export interface IMenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
// * Menu
export interface IMenu {
	path: string;
	component?: string | any;
	element?: string | any;
	auth?: boolean | number;
	name?: string;
	title?: string;
	isLink?: boolean | number;
	isIframe?: boolean | number;
	address?: string;
	isHide?: boolean | number;
	isKeepAlive?: boolean | number;
	isAffix?: boolean | number;
	roles?: string[];
	permission?: string[];
	icon?: string;
	children?: IMenu[];
}
