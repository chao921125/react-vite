import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../../../src/router/interface";

// dashboard 模块
const dashboardRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Dashboard"
		},
		children: [
			{
				path: "/dashboard/dataVisualize",
				element: lazyLoad(React.lazy(() => import("../../../src/pages/dashboard/dataVisualize"))),
				meta: {
					requiresAuth: true,
					title: "数据可视化",
					key: "dataVisualize"
				}
			},
			{
				path: "/dashboard/embedded",
				element: lazyLoad(React.lazy(() => import("../../../src/pages/dashboard/embedded"))),
				meta: {
					requiresAuth: true,
					title: "内嵌页面",
					key: "embedded"
				}
			}
		]
	}
];

export default dashboardRouter;
