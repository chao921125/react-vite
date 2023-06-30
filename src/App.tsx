import { useEffect, useState, Suspense } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
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

	// 自定义加载动画
	const loading = () => {
		return (
			<>
				<div>......</div>
			</>
		);
	};

	const router = createBrowserRouter(Routers);

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
			<Suspense fallback={loading()}>
				<RouterProvider router={router}></RouterProvider>
			</Suspense>
		</ConfigProvider>
	);
}
