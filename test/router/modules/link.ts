import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../../../src/router/interface";

// 外部链接模块
const linkRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "外部链接"
		},
		children: [
			{
				path: "/link/gitee",
				element: lazyLoad(React.lazy(() => import("../../../src/pages/link/gitee"))),
				meta: {
					requiresAuth: true,
					title: "Gitee 仓库",
					key: "gitee"
				}
			},
			{
				path: "/link/github",
				element: lazyLoad(React.lazy(() => import("../../../src/pages/link/github"))),
				meta: {
					requiresAuth: true,
					title: "GitHub 仓库",
					key: "github"
				}
			},
			{
				path: "/link/juejin",
				element: lazyLoad(React.lazy(() => import("../../../src/pages/link/juejin"))),
				meta: {
					requiresAuth: true,
					title: "掘金文档",
					key: "juejin"
				}
			},
			{
				path: "/link/myBlog",
				element: lazyLoad(React.lazy(() => import("../../../src/pages/link/myBlog"))),
				meta: {
					requiresAuth: true,
					title: "个人博客",
					key: "myBlog"
				}
			}
		]
	}
];

export default linkRouter;
