import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { useRecoilValue } from "recoil";
import { useTranslation } from "react-i18next";
import { Routers } from "@/router";
import Store from "@/store";
import { setHtmlLang } from "@/plugins/utils/i18n";
import { II18nKey } from "@/interface/i18n";
import { antI18n } from "@/plugins/i18n";
import ThemeConfig from "@/config/themeConfig";
import Storage from "@/plugins/utils/storage";
import Constants from "@/plugins/constants";

export default function APP() {
	const locale = useRecoilValue(Store.useThemeState).i18n as II18nKey;
	const [i18nLanguage, setI18nLanguage] = useState(antI18n[locale]);
	const { i18n } = useTranslation();

	useEffect(() => {
		setHtmlLang(locale);
		setI18nLanguage(antI18n[locale]);
		i18n.changeLanguage(Storage.getStorage(Constants.storageKey.i18nLocal) || ThemeConfig.i18nDef);
	}, [i18n, locale]);

	// theme prefixCls
	return (
		<ConfigProvider locale={i18nLanguage} autoInsertSpaceInButton={true} componentSize={"middle"} prefixCls={""}>
			<Routers></Routers>
		</ConfigProvider>
	);
}
