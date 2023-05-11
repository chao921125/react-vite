import { atom, useRecoilValue, useSetRecoilState } from "recoil";
import ThemeConfig from "@/config/themeConfig";
import { ITheme } from "@/interface/theme";

const theme: ITheme = {
	title: import.meta.env.VITE_TITLE,
	theme: "default",
	i18n: ThemeConfig.i18nDef,
};

export const themeState = atom({
	key: "themeState",
	default: theme,
});

export default {
	getTheme: () => {
		return useRecoilValue(themeState);
	},
	setTheme: (value: ITheme) => {
		Object.assign(themeState, value);
		return useSetRecoilState(themeState);
	},
};
