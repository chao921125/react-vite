import { SET_ROUTERS } from "@/store/types";
// import { getRouters } from "@/api/routers";

/**
 * @description 获取路由
 * @param {Array} payload
 * @returns
 */
export const setRoutersHandler = () => async (dispatch: (arg0: { type: string; payload: {} }) => void) => {
	const { data } = { data: {} }; // await getRouters();
	dispatch({
		type: SET_ROUTERS,
		payload: data,
	});
};
