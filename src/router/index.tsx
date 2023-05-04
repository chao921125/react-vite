// 动态路由解决方案 https://juejin.cn/post/7132393527501127687
// 动态路由解决方案 https://zhuanlan.zhihu.com/p/518339176
// 动态路由解决方案 https://www.yisu.com/zixun/728024.html
import { useRoutes } from "react-router-dom";
import { Suspense, lazy } from "react";
import Router from "@/interface/router";

const routes = [
	{
		path: "",
		auth: false,
		component: lazy(() => import("@/pages/layout/Index")),
		children: [
			{
				path: "/",
				component: lazy(() => import("@/pages/Home")),
			},
			{
				path: "/road-map",
				component: lazy(() => import("@/pages/RoadMap")),
			},
			{
				path: "/about",
				auth: false,
				component: lazy(() => import("@/pages/About")),
			},
			{
				path: "/screen",
				component: lazy(() => import("@/pages/demo/Screen")),
			},
			{
				path: "/demo-babylon",
				component: lazy(() => import("@/pages/demo/babylonjs/DyModal")),
			},
		],
	},
	{
		path: "*",
		auth: false,
		component: lazy(() => import("@/pages/error/NotFound")),
	},
	{
		path: "/redirect",
		auth: false,
		component: lazy(() => import("@/pages/layout/Redirect")),
	},
];

// const routerData = (routers: Router[]) => {
//
// }

const generateRouter = (routers: any) => {
	{
		/* 把懒加载的异步路由变成组件装载进去 */
	}
	return routers.map((item: any) => {
		if (item.children) {
			item.children = generateRouter(item.children);
		}
		item.element = (
			<Suspense fallback={<div>Loading...</div>}>
				<item.component />
			</Suspense>
		);
		return item;
	});
};

export const Router = () => useRoutes(generateRouter(routes));

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

export default { Router, checkRouterAuth };
