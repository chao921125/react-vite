import { lazy } from "react";
import RouterData from "@/config/routerData";
import IRouter from "@/interface/router";

const errorRouters: Array<IRouter> = [];

const baseRouters: Array<IRouter> = [
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
				path: "/animation",
				component: lazy(() => import("@/pages/demo/Animation")),
			},
			{
				path: "/screen",
				component: lazy(() => import("@/pages/demo/Screen")),
			},
			{
				path: "/demo-babylon",
				component: lazy(() => import("@/pages/demo/babylonjs/DyModal")),
			},
			...RouterData.menus,
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

export default [...errorRouters, ...baseRouters];