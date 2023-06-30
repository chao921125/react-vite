import { lazy } from "react";
import { IMenu } from "@/interface/router";

export const errorRouters: Array<IMenu> = [
	{
		path: "*",
		auth: false,
		element: lazy(() => import("@/pages/error/NotFound")),
	},
	{
		path: "/404",
		auth: false,
		element: lazy(() => import("@/pages/error/NotFound")),
	},
];

export const baseRouters: Array<IMenu> = [
	{
		path: "",
		auth: false,
		element: lazy(() => import("@/pages/layout/Index")),
		children: [
			{
				path: "/",
				element: lazy(() => import("@/pages/Home")),
			},
			{
				path: "/home",
				element: lazy(() => import("@/pages/Home")),
			},
			{
				path: "/demo-animation",
				element: lazy(() => import("@/pages/demo/Animation")),
			},
			{
				path: "/demo-screen",
				element: lazy(() => import("@/pages/demo/Screen")),
			},
			{
				path: "/demo-babylon",
				element: lazy(() => import("@/pages/demo/babylonjs/DyModal")),
			},
			{
				path: "/wifi",
				element: lazy(() => import("@/pages/wifi/Index")),
			},
			...errorRouters,
		],
	},
	{
		path: "/redirect",
		auth: false,
		element: lazy(() => import("@/pages/layout/Redirect")),
	},
];

export default [...errorRouters, ...baseRouters];
