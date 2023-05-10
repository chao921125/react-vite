import { I18nKey } from "@/interface/i18n";

// 给html设置语言
export const setHtmlLang = (lang: I18nKey) => {
	const htmlEl = document.querySelector("html") as HTMLElement;
	if (htmlEl) {
		htmlEl.setAttribute("lang", lang);
	}
};

// 获取当前语言
export const getCurrentLocal = (): I18nKey => {};
