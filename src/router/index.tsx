// 动态路由解决方案 https://juejin.cn/post/7132393527501127687
// 动态路由解决方案 https://zhuanlan.zhihu.com/p/518339176
// 动态路由解决方案 https://www.yisu.com/zixun/728024.html
import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { IMenu } from "@/interface/router";
import routes from "./route";

// 自定义加载动画
const loading = () => {
	return (
		<>
			<div></div>
		</>
	);
};
/**
 * 把懒加载的异步路由变成组件装载进去
 * @param routers
 */
const generateRouter = (routers: IMenu[]) => {
	return routers.map((item: any) => {
		if (item.children) {
			item.children = generateRouter(item.children);
		}
		item.element = (
			<Suspense fallback={loading()}>
				<item.component />
			</Suspense>
		);
		return item;
	});
};
console.log(JSON.stringify(routes));
export const Routers = () => useRoutes(generateRouter(routes));

//根据路径获取路由
const checkAuth = (routers: any, path: String) => {
	for (const data of routers) {
		if (data.path == path) return data;
		if (data.children) {
			const res: any = checkAuth(data.children, path);
			if (res) return res;
		}
	}
	return null;
};

const checkRouterAuth = (path: String) => {
	let auth = null;
	auth = checkAuth(routes, path);
	return auth;
};

export const lazyLoad = (componentPathName: string) => {
	const Module = lazy(() => import(`pages/${componentPathName}`));
	return <Module />;
};

const viewsModules: any = import.meta.glob("../pages/**/**.{vue,tsx}");
const dynamicViewsModules: Record<string, Function> = Object.assign({}, { ...viewsModules });
console.log(routeToComponent([{ name: "demo", component: "demo/Screen" }]));
function routeToComponent(routes: any[]) {
	if (!routes) return [];
	return routes.map((item: any) => {
		if (item.component) item.component = componentImport(dynamicViewsModules, item.component as string);
		item.children && routeToComponent(item.children);
		return item;
	});
}

function componentImport(viewsModules: Record<string, Function>, component: string) {
	const keys = Object.keys(viewsModules);
	const matchKeys = keys.filter((key) => {
		const k = key.replace(/..\/pages|../, "");
		return k.startsWith(`${component}`) || k.startsWith(`/${component}`);
	});
	if (matchKeys?.length === 1) {
		const matchKey = matchKeys[0];
		return viewsModules[matchKey];
	}
	if (matchKeys?.length > 1) {
		return false;
	}
}

export default { Routers, checkRouterAuth };
