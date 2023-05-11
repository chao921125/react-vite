import { II18nKey } from "@/interface/i18n";
import Utils from "./index";
import Constants from "@/plugins/constants";

/**
 * 给html设置语言
 * @param lang
 */
export const setHtmlLang = (lang: II18nKey) => {
	const htmlEl = document.querySelector("html") as HTMLElement;
	if (htmlEl) {
		htmlEl.setAttribute("lang", lang);
	}
};

/**
 * 获取当前语言
 */
export const getCurrentLocale = (): II18nKey => {
	const lang = Utils.Storages.getLocalStorage(Constants.storageKey.i18nLocal) || "";
	const isNavigatorLanguageValid = typeof navigator !== "undefined" && typeof navigator.language === "string";
	const browserLang = isNavigatorLanguageValid ? navigator.language.split("-").join("-") : "";
	return (lang || browserLang || defaultLang) as II18nKey;
};

export const localeNameExp = (lang: string): boolean => {
	const localeExp = /^([a-z]{2})-?([a-z]{2})?$/;
	return localeExp.test(lang);
};

/**
 * 切换语言
 */
export const setChangeLang = () => {};
