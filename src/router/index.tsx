// 动态路由解决方案 https://juejin.cn/post/7132393527501127687
// 动态路由解决方案 https://zhuanlan.zhihu.com/p/518339176
// 动态路由解决方案 https://www.yisu.com/zixun/728024.html
import { useRoutes } from "react-router-dom";
import { Suspense } from "react";
import { IRouter } from "@/interface/router";
import routes from "./route";

// 自定义加载动画
const loading = () => {
	return (
		<>
			<div></div>
		</>
	);
};
/**
 * 把懒加载的异步路由变成组件装载进去
 * @param routers
 */
const generateRouter = (routers: IRouter[]) => {
	return routers.map((item: any) => {
		if (item.children) {
			item.children = generateRouter(item.children);
		}
		item.element = (
			<Suspense fallback={loading()}>
				<item.component />
			</Suspense>
		);
		return item;
	});
};

export const Routers = () => useRoutes(generateRouter(routes));

//根据路径获取路由
const checkAuth = (routers: any, path: String) => {
	for (const data of routers) {
		if (data.path == path) return data;
		if (data.children) {
			const res: any = checkAuth(data.children, path);
			if (res) return res;
		}
	}
	return null;
};

const checkRouterAuth = (path: String) => {
	let auth = null;
	auth = checkAuth(routes, path);
	return auth;
};

export default { Routers, checkRouterAuth };
