import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";

// 数据大屏模块
const dataScreenRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		children: [
			{
				path: "/dataScreen/index",
				element: lazyLoad(React.lazy(() => import("../../pages/dataScreen"))),
				meta: {
					requiresAuth: true,
					title: "数据大屏",
					key: "dataScreen"
				}
			}
		]
	}
];

export default dataScreenRouter;
