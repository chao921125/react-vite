import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
// 增加获取本地语言同时做一个转换的方案
import LanguageDetector from "i18next-browser-languagedetector";

// @ts-ignore
import en from "./locales/modules/en.json";
// @ts-ignore
import zhCN from "./locales/modules/zh-cn.json";

const resources = {
	en: {
		translation: en,
	},
	zhCN: {
		translation: zhCN,
	},
};
i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "zh-cn",
		lng: "zh-cn",
		debug: true,
		resources: resources,
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
