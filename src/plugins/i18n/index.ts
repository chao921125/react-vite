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
console.log(i18n);
export default i18n;
