import { lazy } from "react";
import { IMenu } from "@/interface/router";

export const errorRouters: Array<IMenu> = [
	{
		path: "*",
		auth: false,
		component: lazy(() => import("@/pages/error/NotFound")),
	},
	{
		path: "/404",
		auth: false,
		component: lazy(() => import("@/pages/error/NotFound")),
	},
];

export const baseRouters: Array<IMenu> = [
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
				path: "/home",
				component: lazy(() => import("@/pages/Home")),
			},
			{
				path: "/demo-animation",
				component: lazy(() => import("@/pages/demo/Animation")),
			},
			{
				path: "/demo-screen",
				component: lazy(() => import("@/pages/demo/Screen")),
			},
			{
				path: "/demo-babylon",
				component: lazy(() => import("@/pages/demo/babylonjs/DyModal")),
			},
			{
				path: "/wifi",
				component: lazy(() => import("@/pages/wifi/Index")),
			},
			...errorRouters,
		],
	},
	{
		path: "/redirect",
		auth: false,
		component: lazy(() => import("@/pages/layout/Redirect")),
	},
];

export default [...errorRouters, ...baseRouters];
