// import React from "react";
// import lazyLoad from "@/router/util/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../../../src/router/interface";
import Home from "../../../src/pages/home";

// 首页模块
const homeRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/home/index",
				// element: lazyLoad(React.lazy(() => import("@/pages/home/index"))),
				element: <Home />,
				meta: {
					requiresAuth: true,
					title: "首页",
					key: "home"
				}
			}
		]
	}
];

export default homeRouter;
