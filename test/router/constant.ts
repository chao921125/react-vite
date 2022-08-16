import Layout from "../../src/pages/layout";
import { RouteObject } from "../../src/router/interface";
// 懒加载 Layout
// import React from "react";
// import lazyLoad from "@/router/util/lazyLoad";
// const Layout = lazyLoad(React.lazy(() => import("@/layouts/index")));

/**
 * @description: default layout
 */
export const LayoutIndex = (): RouteObject => Layout;
