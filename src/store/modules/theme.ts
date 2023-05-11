import { atom } from "recoil";
import ThemeConfig from "@/config/themeConfig";
import { ITheme } from "@/interface/theme";

const theme: ITheme = {
	title: import.meta.env.VITE_TITLE,
	theme: "default",
	i18n: ThemeConfig.i18nDef,
};

export default {
	themeState: atom({
		key: "themeState",
		default: theme,
	}),
};
