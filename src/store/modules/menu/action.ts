import StoreConfig from "@/config/storeConfig";
import { getMenuList } from "@/api/modules/user";
import { Dispatch } from "react";

// * updateCollapse
export const updateCollapse = (isCollapse: boolean) => ({
	type: StoreConfig.UPDATE_COLLAPSE,
	isCollapse,
});

// * setMenuList
export const setMenuList = (menuList: Menu.MenuOptions[]) => ({
	type: StoreConfig.SET_MENU_LIST,
	menuList,
});

// ? 下面方法仅为测试使用，不参与任何功能开发
interface MenuProps {
	type: string;
	menuList: Menu.MenuOptions[];
}
// * redux-thunk
export const getMenuListActionThunk = () => {
	return async (dispatch: Dispatch<MenuProps>) => {
		// const res = await getMenuList();
		dispatch({
			type: StoreConfig.SET_MENU_LIST,
			// menuList: (res.data as Menu.MenuOptions[]) ?? [],
			menuList: [],
		});
	};
};

// * redux-promise《async/await》
export const getMenuListAction = async (): Promise<MenuProps> => {
	// const res = await getMenuList();
	return {
		type: StoreConfig.SET_MENU_LIST,
		// menuList: res.data || [],
		menuList: [],
	};
};

// * redux-promise《.then/.catch》
export const getMenuListActionPromise = (): Promise<MenuProps> => {
	return getMenuList().then(() => {
		return {
			type: StoreConfig.SET_MENU_LIST,
			// menuList: res.data || [],
			menuList: [],
		};
	});
};
