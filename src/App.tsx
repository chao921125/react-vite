import { useRecoilValue } from "recoil";
import { ConfigProvider, theme } from "antd";
import { Routers } from "@/router";
import { setHtmlLang } from "@/plugins/utils/i18n";
export default function APP() {
	const local = useRecoilValue();

	useEffect(() => {
		setHtmlLang();
	}, []);

	// theme prefixCls
	return (
		<ConfigProvider autoInsertSpaceInButton={true} componentSize={"middle"} locale={local} prefixCls={""} theme={{ algorithm: theme.darkAlgorithm }}>
			<Routers></Routers>
		</ConfigProvider>
	);
}
