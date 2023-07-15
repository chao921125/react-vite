import { atom, selector } from "recoil";
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
	i18nState: atom({
		key: "i18nState",
		default: ThemeConfig.i18nDef,
	}),
	useThemeState: selector({
		key: "useThemeState",
		get: ({ get }) => {
			return get(themeState);
		},
		set: ({ get, set }, newValue) => {
			const oldValue = get(themeState);
			const updateValue = Object.assign({}, oldValue, newValue);
			set(themeState, updateValue);
		},
	}),
};
