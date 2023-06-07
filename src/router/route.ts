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
		children: [...errorRouters],
	},
	{
		path: "/redirect",
		auth: false,
		component: lazy(() => import("@/pages/layout/Redirect")),
	},
];

export default [...errorRouters, ...baseRouters];
