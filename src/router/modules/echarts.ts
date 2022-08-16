import React from "react";
import lazyLoad from "../utils/lazyLoad";
import { LayoutIndex } from "../constant";
import { RouteObject } from "../interface";

// echarts 模块
const formRouter: Array<RouteObject> = [
	{
		element: <LayoutIndex />,
		meta: {
			title: "Echarts"
		},
		children: [
			{
				path: "/echarts/waterChart",
				element: lazyLoad(React.lazy(() => import("../../pages/echarts/waterChart"))),
				meta: {
					requiresAuth: true,
					title: "水型图",
					key: "waterChart"
				}
			},
			{
				path: "/echarts/columnChart",
				element: lazyLoad(React.lazy(() => import("../../pages/echarts/columnChart"))),
				meta: {
					requiresAuth: true,
					title: "柱状图",
					key: "columnChart"
				}
			},
			{
				path: "/echarts/lineChart",
				element: lazyLoad(React.lazy(() => import("../../pages/echarts/lineChart"))),
				meta: {
					requiresAuth: true,
					title: "折线图",
					key: "lineChart"
				}
			},
			{
				path: "/echarts/pieChart",
				element: lazyLoad(React.lazy(() => import("../../pages/echarts/pieChart"))),
				meta: {
					requiresAuth: true,
					title: "饼图",
					key: "pieChart"
				}
			},
			{
				path: "/echarts/radarChart",
				element: lazyLoad(React.lazy(() => import("../../pages/echarts/radarChart"))),
				meta: {
					requiresAuth: true,
					title: "雷达图",
					key: "radarChart"
				}
			},
			{
				path: "/echarts/nestedChart",
				element: lazyLoad(React.lazy(() => import("../../pages/echarts/nestedChart"))),
				meta: {
					requiresAuth: true,
					title: "嵌套环形图",
					key: "nestedChart"
				}
			}
		]
	}
];

export default formRouter;
