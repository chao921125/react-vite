export default interface IRouter {
	path: string;
	component: string | any;
	auth?: boolean;
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
	children?: IRouter[];
}
