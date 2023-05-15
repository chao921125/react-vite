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
			i18n.changeLanguage("zh-cn");
			setThemeState({ i18n: "zh-cn" });
			setI18nState("zh-cn");
		} else {
			i18n.changeLanguage("en-us");
			setThemeState({ i18n: "en-us" });
			setI18nState("en-us");
		}
		console.log(t("demo"));
		console.log(i18nState, themeState);
	};

	return (
		<Row justify="center" className="content-body home-box">
			<Col span={24}>
				{t("demo")}
				<Pagination total={85} showSizeChanger showQuickJumper showTotal={(total) => `Total ${total} items`}></Pagination>
				<Switch defaultChecked onChange={onChange} />
			</Col>
		</Row>
	);
}
