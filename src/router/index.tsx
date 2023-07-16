/**
 * 1、router中处理最基本的路由
 * 2、封装处理菜单转路由的函数
 * 3、在APP.tsx，也就是入口监听路由数据变化，在此将menu和route都存入状态管理中
 * 4、调用路由处理函数
 */
import { useEffect } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

export default function Router() {
	const componentsAll = import.meta.glob("../pages/**/**.{jsx,tsx}");
	const getComponent = (path: string) => {
		return componentsAll[path];
	};

	const errorRouter: any[] = [
		{
			path: "*",
			lazy: () => import("@/pages/error/NotFound"),
		},
		{
			path: "/404",
			lazy: () => import("@/pages/error/NotFound"),
		},
	];

	let baseRouter: any[] = [
		{
			path: "/",
			lazy: () => import("@/pages/layout/Index"),
			children: [
				{
					index: true,
					lazy: () => import("@/pages/Home"),
				},
				{
					path: "home",
					lazy: () => import("@/pages/Home"),
				},
				{
					path: "demo-animation",
					lazy: () => import("@/pages/demo/Animation"),
				},
				{
					path: "demo-screen",
					lazy: () => import("@/pages/demo/Screen"),
				},
				{
					path: "demo-babylon",
					lazy: () => import("@/pages/demo/babylonjs/DyModal"),
				},
				{
					path: "wifi",
					lazy: () => import("@/pages/wifi/Index"),
				},
			],
		},
		{
			path: "/redirect",
			lazy: () => import("@/pages/layout/Redirect"),
		},
	];

	useEffect(() => {
		if (localStorage.getItem("router") && localStorage.getItem("router") !== null) {
			const add = JSON.parse(localStorage.getItem("router") || "");
			for (let o of add) {
				baseRouter[0].children.push({
					path: o.path,
					lazy: () => getComponent(o.component),
				});
			}
		}
	}, [localStorage]);

	const routers = [...errorRouter, ...baseRouter];

	const router = createBrowserRouter(routers);

	return (
		<>
			<RouterProvider router={router} fallbackElement={<p>Loading...</p>} />
		</>
	);
}
