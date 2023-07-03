import { lazy } from "react";

export const errorRouters: Array<any> = [
	{
		path: "*",
		element: lazy(() => import("@/pages/error/NotFound")),
		meta: {
			auth: false,
		},
	},
	{
		path: "/404",
		element: lazy(() => import("@/pages/error/NotFound")),
		meta: {
			auth: false,
		},
	},
];

export const baseRouters: Array<any> = [
	{
		path: "",
		element: lazy(() => import("@/pages/layout/Index")),
		meta: {
			auth: false,
		},
		children: [
			{
				path: "/",
				element: lazy(() => import("@/pages/Home")),
				meta: {
					auth: false,
				},
			},
			{
				path: "/home",
				element: lazy(() => import("@/pages/Home")),
				meta: {
					auth: false,
				},
			},
			{
				path: "/demo-animation",
				element: lazy(() => import("@/pages/demo/Animation")),
				meta: {
					auth: false,
				},
			},
			{
				path: "/demo-screen",
				element: lazy(() => import("@/pages/demo/Screen")),
				meta: {
					auth: false,
				},
			},
			{
				path: "/demo-babylon",
				element: lazy(() => import("@/pages/demo/babylonjs/DyModal")),
				meta: {
					auth: false,
				},
			},
			{
				path: "/wifi",
				element: lazy(() => import("@/pages/wifi/Index")),
				meta: {
					auth: false,
				},
			},
			...errorRouters,
		],
	},
	{
		path: "/redirect",
		element: lazy(() => import("@/pages/layout/Redirect")),
		meta: {
			auth: false,
		},
	},
];

export default [...errorRouters, ...baseRouters];
