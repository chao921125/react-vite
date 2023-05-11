import { useEffect } from "react";
import { ConfigProvider } from "antd";
import { Routers } from "@/router";
import Store from "@/store";
import { setHtmlLang } from "@/plugins/utils/i18n";

export default function APP() {
	const local = Store.Theme.getTheme().i18n;

	useEffect(() => {
		setHtmlLang(local);
	}, [Store.Theme.getTheme().i18n]);

	// theme prefixCls
	return (
		<ConfigProvider autoInsertSpaceInButton={true} componentSize={"middle"} locale={local} prefixCls={""}>
			<Routers></Routers>
		</ConfigProvider>
	);
}
