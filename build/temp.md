# React18.x + i18next + antd 国际化正确使用姿势及避坑指南

如果你使用这个教程还不能够解决你的问题的话，直接私信我，免费一对一给你解决。

# 一、使用vite创建一个react项目

具体的创建方法大家参考vite官方文档，大概的操作如下，如果需要更详细的，大家去自行搜索即可
```npm
pnpm create vite
```
因为我这里使用的是ts版本，所以，你自己看着办吧。

# 二、安装依赖
```npm
pnpm add i18next i18next-browser-languagedetector i18next-http-backend react-i18next
```
其中 i18next-browser-languagedetector i18next-http-backend 这俩包我只是参考官方的文档安装了，具体的作用请自行搜索吧（付费咨询也是么的问题，Q～A～Q）。

# 三、配置i18next
在src目录下创建一个i18n文件夹，然后创建index.ts文件，内容如下
```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// 检测当前浏览器的语言或者从服务器获取配置资源,不过也没有什么用处
import Backend from "i18next-http-backend";
// 嗅探当前浏览器语言
import LanguageDetector from "i18next-browser-languagedetector";
import ThemeConfig from "@/config/themeConfig";
import Storage from "@/plugins/utils/storage";
import Constants from "@/plugins/constants";

import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";

export const antI18n = {
	[ThemeConfig.i18nEnum.ZHCN.value]: zhCN,
	[ThemeConfig.i18nEnum.ENUS.value]: enUS,
};

import zhCNLocale from "./modules/zhCN.json";
import enUSLocale from "./modules/enUS.json";

// @ts-ignore
i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		resources: {
			[ThemeConfig.i18nEnum.ZHCN.value]: {
				translation: zhCNLocale,
			},
			[ThemeConfig.i18nEnum.ENUS.value]: {
				translation: enUSLocale,
			},
		},
		fallbackLng: Storage.getStorage(Constants.storageKey.i18nLocal) || ThemeConfig.i18nDef,
		lng: Storage.getStorage(Constants.storageKey.i18nLocal) || ThemeConfig.i18nDef,
		preload: ThemeConfig.i18nKeyArr,
		debug: true,
		interpolation: {
			escapeValue: false,
		},
		detection: ["localStorage", "sessionStorage", "cookie"],
	});
export default i18n;
```
# 四、配置i18next翻译文件（注意：必须是.json）
在i18n目录下创建modules目录，并且创建enUS.json以及zhCN.json，各位可以自行定义，如果小白还不知道怎么扩展的话，付费找我吧。

enUS.json
```json
{
	"msg": "test",
	"menu": {
		"home": "home"
	},
	"page": {
		"loginTitle": "login"
	},
	"antd": {
		"paginationTotal": "Total {{total}} items"
	}
}
```
znCN.json
```json
{
	"msg": "示例",
	"menu": {
		"home": "首页"
	},
	"page": {
		"loginTitle": "登录"
	},
	"antd": {
		"paginationTotal": "共 {{total}} 条"
	}
}
```
# 五、在main.ts引入
```tsx
// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import App from "./App";
import "@/plugins/i18n";
// import "antd/dist/reset.css";
import "animate.css";
import "@/assets/styles/index.scss";

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// * react严格模式
	// <React.StrictMode>
	<BrowserRouter>
		<RecoilRoot>
			<App></App>
		</RecoilRoot>
	</BrowserRouter>,
	// </React.StrictMode>,
);
```
```tsx
import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { useRecoilValue } from "recoil";
import { Routers } from "@/router";
import Store from "@/store";
import { setHtmlLang } from "@/plugins/utils/i18n";
import { II18nKey } from "@/interface/i18n";
import { antI18n } from "@/plugins/i18n";

export default function APP() {
	const locale = useRecoilValue(Store.useThemeState).i18n as II18nKey;
	const [i18n, setI18n] = useState(antI18n[locale]);

	useEffect(() => {
		setHtmlLang(locale);
		setI18n(antI18n[locale]);
	}, [locale]);

	// theme prefixCls
	return (
		<ConfigProvider locale={i18n} autoInsertSpaceInButton={true} componentSize={"middle"} prefixCls={""}>
			<Routers></Routers>
		</ConfigProvider>
	);
}
```
# 六、在页面中使用
