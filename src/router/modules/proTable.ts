import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";

// 超级表格模块
const proTableRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "超级表格"
		},
		children: [
			{
				path: "/proTable/useHooks",
				element: lazyLoad(React.lazy(() => import("../../pages/proTable/useHooks"))),
				meta: {
					requiresAuth: true,
					title: "使用 Hooks",
					key: "useHooks"
				}
			},
			{
				path: "/proTable/useComponent",
				element: lazyLoad(React.lazy(() => import("../../pages/proTable/useComponent"))),
				meta: {
					requiresAuth: true,
					title: "使用 Component",
					key: "useComponent"
				}
			}
		]
	}
];

export default proTableRouter;
