import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";

// 表单 Form 模块
const formRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "表单 Form"
		},
		children: [
			{
				path: "/form/basicForm",
				element: lazyLoad(React.lazy(() => import("../../pages/form/basicForm"))),
				meta: {
					requiresAuth: true,
					title: "基础 Form",
					key: "basicForm"
				}
			},
			{
				path: "/form/validateForm",
				element: lazyLoad(React.lazy(() => import("../../pages/form/validateForm"))),
				meta: {
					requiresAuth: true,
					title: "校验 Form",
					key: "validateForm"
				}
			},
			{
				path: "/form/dynamicForm",
				element: lazyLoad(React.lazy(() => import("../../pages/form/dynamicForm"))),
				meta: {
					requiresAuth: true,
					title: "动态 Form",
					key: "dynamicForm"
				}
			}
		]
	}
];

export default formRouter;
