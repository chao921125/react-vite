import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../../../src/router/interface";

// 常用组件模块
const assemblyRouter: Array<RouteObject> = [
	{
		element: LayoutIndex(),
		meta: {
			title: "常用组件",
		},
		children: [
			{
				path: "/assembly/selectIcon",
				element: lazyLoad(React.lazy(() => import("../../../src/pages/assembly/selectIcon"))),
				meta: {
					requiresAuth: true,
					title: "Icon 选择",
					key: "selectIcon",
				},
			},
			{
				path: "/assembly/batchImport",
				element: lazyLoad(React.lazy(() => import("../../../src/pages/assembly/batchImport"))),
				meta: {
					requiresAuth: true,
					title: "批量导入数据",
					key: "selectIcon",
				},
			},
		],
	},
];

export default assemblyRouter;
