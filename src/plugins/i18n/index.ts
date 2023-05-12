import i18n from "i18next";
import { initReactI18next } from "react-i18next";
// 检测当前浏览器的语言或者从服务器获取配置资源,不过也没有什么用处
import httpBackend from "i18next-http-backend";
// 嗅探当前浏览器语言
import languagedetector from "i18next-browser-languagedetector";
import { II18n } from "@/interface/i18n";
import ThemeConfig from "@/config/themeConfig";
import Storage from "@/plugins/utils/storage";
import Constants from "@/plugins/constants";

import zhCNLocale from "./modules/zh-cn.json";
import enUSLocale from "./modules/en-us.json";
// import zhCN from "antd/locale/zh_CN";
// import enUS from "antd/locale/en_US";

export const resources: II18n = {
	[ThemeConfig.i18nEnum.ZHCN.value]: {
		translation: {
			...zhCNLocale,
		},
	},
	[ThemeConfig.i18nEnum.ENUS.value]: {
		translation: {
			...enUSLocale,
		},
	},
};
i18n
	.use(initReactI18next)
	.use(httpBackend)
	.use(languagedetector)
	.init({
		resources,
		fallbackLng: Storage.getStorage(Constants.storageKey.i18nLocal) || ThemeConfig.i18nDef,
		lng: Storage.getStorage(Constants.storageKey.i18nLocal) || ThemeConfig.i18nDef,
		debug: false,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
