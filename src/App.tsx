import { useState, useEffect } from "react";
import { ConfigProvider } from "antd";
import { connect } from "react-redux";
import { HashRouter } from "react-router-dom";
import { setLanguage } from "@/store/modules/global/action";
import { getBrowserLang } from "@/plugins/utils/util";
import useTheme from "@/plugins/hooks/useTheme";
import AuthRouter from "@/router/utils/authRouter";
import Router from "@/router/index";
import zhCN from "antd/lib/locale/zh_CN";
import enUS from "antd/lib/locale/en_US";
import i18n from "i18next";
import "moment/dist/locale/zh-cn";
import "moment/dist/locale/en-gb";

const App = (props: any) => {
	const { language, assemblySize, themeConfig, setLanguage } = props;
	const { weakOrGray } = themeConfig;
	const [i18nLocale, setI18nLocale] = useState(zhCN);

	// 全局使用主题
	useTheme(weakOrGray);

	// 设置 antd 语言国际化
	const setAntdLanguage = () => {
		// 如果 redux 中有默认语言就设置成 redux 的默认语言，没有默认语言就设置成浏览器默认语言
		if (language && language == "zh-cn") return setI18nLocale(zhCN);
		if (language && language == "en-us") return setI18nLocale(enUS);
		if (getBrowserLang() == "zh") return setI18nLocale(zhCN);
		if (getBrowserLang() == "en") return setI18nLocale(enUS);
	};

	// @ts-ignore
	useEffect(async () => {
		// 全局使用国际化
		await i18n.changeLanguage(language || getBrowserLang());
		setLanguage(language || getBrowserLang());
		setAntdLanguage();
	}, [language]);

	return (
		<HashRouter>
			<ConfigProvider locale={i18nLocale} componentSize={assemblySize}>
				<AuthRouter>
					<Router />
				</AuthRouter>
			</ConfigProvider>
		</HashRouter>
	);
};

const mapStateToProps = (state: any) => state.global;
const mapDispatchToProps = { setLanguage };
export default connect(mapStateToProps, mapDispatchToProps)(App);
