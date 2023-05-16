import { Row, Col, Pagination, Switch } from "antd";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import Store from "@/store";
import "@/assets/styles/page/home.scss";
import { useTranslation } from "react-i18next";

export default function Home() {
	const [i18nState, setI18nState] = useRecoilState(Store.i18nState);
	const setThemeState = useSetRecoilState(Store.useThemeState);
	const themeState = useRecoilValue(Store.useThemeState);
	const { t, i18n } = useTranslation();

	const onChange = (checked: boolean) => {
		if (checked) {
			i18n.changeLanguage("zh-CN");
			setThemeState({ i18n: "zh-CN" });
			setI18nState("zh-CN");
		} else {
			i18n.changeLanguage("en-US");
			setThemeState({ i18n: "en-US" });
			setI18nState("en-US");
		}
		console.log(i18nState, themeState);
	};

	return (
		<Row justify="center" className="content-body home-box">
			<Col span={24}>
				{t("msg")}
				<Pagination total={85} showSizeChanger showQuickJumper showTotal={(total) => `${t("antd.paginationTotal", { total: total })}`}></Pagination>
				<Switch defaultChecked onChange={onChange} />
			</Col>
		</Row>
	);
}
