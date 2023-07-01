// 动态路由解决方案 https://juejin.cn/post/7132393527501127687
// 动态路由解决方案 https://zhuanlan.zhihu.com/p/518339176
// 动态路由解决方案 https://www.yisu.com/zixun/728024.html
/**
 * 1、router中处理最基本的路由
 * 2、封装处理菜单转路由的函数
 * 3、在APP.tsx，也就是入口监听路由数据变化，在此将menu和route都存入状态管理中
 * 4、调用路由处理函数
 */
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { baseRouters, errorRouters } from "./router";
// import RouterData from "@/config/routerData";

export default function Routers() {
	// let rootRouter = [
	// 	{
	// 		path: "/",
	// 		component: lazy(() => import("@/pages/Home")),
	// 	},
	// 	{
	// 		path: "/home",
	// 		component: lazy(() => import("@/pages/Home")),
	// 	},
	// ];
	// 自定义加载动画
	const loading = () => {
		return (
			<>
				<div>......</div>
			</>
		);
	};
	/**
	 * 把懒加载的异步路由变成组件装载进去
	 * @param routers
	 */
	const generateRouter = (routers: any[]) => {
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
	// baseRouters[0].children = [...rootRouter];
	let routes = [...errorRouters, ...baseRouters];

	// let Routers = () => useRoutes();
	generateRouter(routes);
	// 动态处理路由
	// const pagesModules: any = import.meta.glob("../pages/**/**.{vue,tsx}");
	// const dynamicPagesModules: Record<string, Function> = Object.assign({}, { ...pagesModules });
	// export const setRouter = () => {
	// 	const dy = routeToComponent(RouterData.menus);
	// 	rootRouter = [...rootRouter, ...dy];
	// 	baseRouters[0].children = [...rootRouter];
	// 	routes = [...errorRouters, ...baseRouters];
	// 	console.log(routes);
	// 	Routers = () => useRoutes(generateRouter(routes));
	// };

	// function routeToComponent(routes: any[]) {
	// 	if (!routes) return [];
	// 	return routes.map((item: any) => {
	// 		if (item.component) {
	// 			item.path = `/${item.path}`;
	// 			// item.component = componentImport(dynamicPagesModules, item.component as string);
	// 			item.component = lazy(dynamicPagesModules[item.component] as any);
	// 		}
	// 		item.children && routeToComponent(item.children);
	// 		return item;
	// 	});
	// }

	// function componentImport(viewsModules: Record<string, Function>, component: string) {
	// 	const keys = Object.keys(viewsModules);
	// 	const matchKeys = keys.filter((key) => {
	// 		const k = key.replace(/..\/pages|../, "");
	// 		return k.startsWith(`${component}`) || k.startsWith(`/${component}`);
	// 	});
	// 	if (matchKeys?.length === 1) {
	// 		const matchKey = matchKeys[0];
	// 		return viewsModules[matchKey];
	// 	}
	// 	if (matchKeys?.length > 1) {
	// 		return false;
	// 	}
	// }

	const router = createBrowserRouter([]);

	return (
		<Suspense fallback={loading()}>
			<RouterProvider router={router} fallbackElement={loading()}></RouterProvider>
		</Suspense>
	);
}
