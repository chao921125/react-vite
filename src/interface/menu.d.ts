// * Menu
export interface IMenu {
	path: string;
	title: string;
	icon?: string;
	isLink?: string;
	close?: boolean;
	children?: IMenu[];
}
// * Dropdown MenuInfo
export interface IMenuInfo {
	key: string;
	keyPath: string[];
	/** @deprecated This will not support in future. You should avoid to use this */
	item: React.ReactInstance;
	domEvent: React.MouseEvent<HTMLElement> | React.KeyboardEvent<HTMLElement>;
}
