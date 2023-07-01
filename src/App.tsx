import { useEffect, useState } from "react";
import { ConfigProvider } from "antd";
import { useRecoilValue } from "recoil";
import Routers from "@/router";
import Store from "@/store";
import { setHtmlLang } from "@/plugins/utils/i18n";
import { II18nKey } from "@/interface/i18n";
import { antI18n } from "@/plugins/i18n";

export default function APP() {
	const locale = useRecoilValue(Store.useThemeState).i18n as II18nKey;
	const [i18nLanguage, setI18nLanguage] = useState(antI18n[locale]);

	useEffect(() => {
		setHtmlLang(locale);
		setI18nLanguage(antI18n[locale]);
	}, [locale]);

	// useEffect(() => {
	// 	setTimeout(() => {
	// 		setRouter();
	// 	}, 5000);
	// }, []);

	// theme prefixCls
	return (
		<ConfigProvider locale={i18nLanguage} autoInsertSpaceInButton={true} componentSize={"middle"} prefixCls={""}>
			<Routers></Routers>
		</ConfigProvider>
	);
}
