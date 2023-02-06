import { AnyAction } from "redux";
import { MenuState } from "@/store/interface";
import produce from "immer";
import StoreConfig from "@/config/storeConfig";

const menuState: MenuState = {
	isCollapse: false,
	menuList: [],
};

// menu reducer
const menu = (state: MenuState = menuState, action: AnyAction) =>
	produce(state, (draftState) => {
		switch (action.type) {
			case StoreConfig.UPDATE_COLLAPSE:
				draftState.isCollapse = action.isCollapse;
				break;
			case StoreConfig.SET_MENU_LIST:
				draftState.menuList = action.menuList;
				break;
			default:
				return draftState;
		}
	});

export default menu;
