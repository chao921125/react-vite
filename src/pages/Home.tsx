import { useEffect } from "react";
import { Row, Col, Pagination, Switch } from "antd";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import Store from "@/store";
import "@/assets/styles/page/home.scss";
import { useTranslation } from "react-i18next";

export default function Home() {
	const [i18nState, setI18nState] = useRecoilState(Store.i18nState);
	const setThemeState = useSetRecoilState(Store.useThemeState);
	const themeState = useRecoilValue(Store.useThemeState);
	const { t } = useTranslation();
	useEffect(() => {
		setI18nState("en-us");
		console.log(i18nState);
	}, []);

	const onChange = (checked: boolean) => {
		console.log(`switch to ${checked}`);
		setThemeState({ i18n: "en-us" });
		if (checked) {
			setThemeState({ i18n: "zh-cn" });
		} else {
			setThemeState({ i18n: "en-us" });
		}
		console.log(themeState);
	};

	return (
		<Row justify="center" className="content-body home-box">
			<Col span={24}>
				{t("menu.home")}
				<Pagination total={85} showSizeChanger showQuickJumper showTotal={(total) => `Total ${total} items`}></Pagination>
				<Switch defaultChecked onChange={onChange} />
			</Col>
		</Row>
	);
}
