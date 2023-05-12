export type II18nKey = "zh-cn" | "zh-tw" | "en-us";

export interface II18nVal {
	[key: string]: string;
}

export type II18n = {
	[key in II18nKey]?: II18nVal;
};
