import { useEffect } from "react";
import { ConfigProvider } from "antd";
import { useRecoilValue } from "recoil";
import { Routers } from "@/router";
import Store from "@/store";
import { setHtmlLang } from "@/plugins/utils/i18n";

export default function APP() {
	const local = useRecoilValue(Store.Theme.themeState).i18n;

	useEffect(() => {
		setHtmlLang(local);
	}, [Store.Theme.themeState]);

	// theme prefixCls
	return (
		<ConfigProvider autoInsertSpaceInButton={true} componentSize={"middle"} locale={local} prefixCls={""}>
			<Routers></Routers>
		</ConfigProvider>
	);
}
