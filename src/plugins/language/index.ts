import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import Backend from "i18next-http-backend";
// 增加获取本地语言同时做一个转换的方案
import LanguageDetector from "i18next-browser-languagedetector";

import enUS from "./modules/en-us";
import zhCN from "./modules/zh-cn";
const languageKeys = import.meta.globEager("./modules/*.ts");

// TODO 处理多语言配置
export const routerArray: object = {};
Object.keys(languageKeys).forEach((item: string) => {
	console.log("==========", item);
});

i18n
	.use(Backend)
	.use(LanguageDetector)
	.use(initReactI18next)
	.init({
		fallbackLng: "zh-cn",
		lng: "zh-cn",
		debug: true,
		resources: {
			"en-us": {
				translation: enUS,
			},
			"zh-cn": {
				translation: zhCN,
			},
		},
		interpolation: {
			escapeValue: false,
		},
	});

export default i18n;
