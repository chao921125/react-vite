import { AnyAction } from "redux";
import { BreadcrumbState } from "@/store/interface";
import produce from "immer";
import * as types from "@/store/types";

const breadcrumbState: BreadcrumbState = {
	breadcrumbList: {},
};

// breadcrumb reducer
const breadcrumb = (state: BreadcrumbState = breadcrumbState, action: AnyAction) =>
	produce(state, draftState => {
		switch (action.type) {
			case types.SET_BREADCRUMB_LIST:
				draftState.breadcrumbList = action.breadcrumbList;
				break;
			default:
				return draftState;
		}
	});

export default breadcrumb;
