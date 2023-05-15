import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// 检测当前浏览器的语言或者从服务器获取配置资源,不过也没有什么用处
import I18NextHttpBackend from "i18next-http-backend";
// 嗅探当前浏览器语言
import I18nextBrowserLanguageDetector from "i18next-browser-languagedetector";
import { II18n } from "@/interface/i18n";
import ThemeConfig from "@/config/themeConfig";
import Storage from "@/plugins/utils/storage";
import Constants from "@/plugins/constants";

import zhCNLocale from "./modules/zh-cn.json";
import enUSLocale from "./modules/en-us.json";
// import zhCNLocale from "./modules/zh-cn";
// import enUSLocale from "./modules/en-us";

import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";

export const antI18n = {
	[ThemeConfig.i18nEnum.ZHCN.value]: zhCN,
	[ThemeConfig.i18nEnum.ENUS.value]: enUS,
};

const resources: II18n = {
	[ThemeConfig.i18nEnum.ZHCN.value]: {
		translation: zhCNLocale,
	},
	[ThemeConfig.i18nEnum.ENUS.value]: {
		translation: enUSLocale,
	},
};
// @ts-ignore
i18n
	.use(I18NextHttpBackend)
	.use(I18nextBrowserLanguageDetector)
	.use(initReactI18next)
	.init({
		resources: resources,
		fallbackLng: Storage.getStorage(Constants.storageKey.i18nLocal) || ThemeConfig.i18nDef,
		lng: Storage.getStorage(Constants.storageKey.i18nLocal) || ThemeConfig.i18nDef,
		debug: false,
		interpolation: {
			escapeValue: false,
		},
		detection: ["localStorage", "sessionStorage", "cookie"],
	});
console.log(i18n);
export default i18n;
