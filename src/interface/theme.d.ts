export type Theme = "default" | "dark" | "light";

export interface ITheme {
	title?: string;
	theme?: Theme;
	i18n?: string;
}
