import { useEffect } from "react";
import { ConfigProvider } from "antd";
import { useRecoilValue } from "recoil";
import { Routers } from "@/router";
import Store from "@/store";
import { setHtmlLang } from "@/plugins/utils/i18n";
import { II18nKey } from "@/interface/i18n";

export default function APP() {
	const local = useRecoilValue(Store.useThemeState).i18n as II18nKey;

	useEffect(() => {
		setHtmlLang(local);
	}, [Store.useThemeState]);

	// theme prefixCls
	return (
		<ConfigProvider autoInsertSpaceInButton={true} componentSize={"middle"} prefixCls={""}>
			<Routers></Routers>
		</ConfigProvider>
	);
}
