import { atom, selector } from "recoil";
import { IMenu } from "@/interface/router";

const menu: IMenu = {
	path: "",
	component: "",
	auth: 0,
	name: "",
	title: "",
	isLink: 0,
	isIframe: 0,
	address: "",
	isHide: 0,
	isKeepAlive: 0,
	isAffix: 0,
	roles: [],
	permission: [],
	icon: "",
	children: [],
};

export const menuState = atom({
	key: "menuState",
	default: menu,
});

export default {
	useMenuState: selector({
		key: "useMenuState",
		get: ({ get }) => {
			return get(menuState);
		},
		set: ({ get, set }, newValue) => {
			const oldValue = get(menuState);
			const updateValue = Object.assign({}, oldValue, newValue);
			set(menuState, updateValue);
		},
	}),
};
