import { Row, Col, Pagination, Switch, Button } from "antd";
import { useNavigate } from "react-router-dom";
import { useSetRecoilState, useRecoilState, useRecoilValue } from "recoil";
import Store from "@/store";
import "@/assets/styles/page/home.scss";
import { useTranslation } from "react-i18next";
import RePagination from "@/components/pagination/Index";
import { useState } from "react";

Component.displayName = "Home";
export function Component() {
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

	const navigate = useNavigate();
	const toDemo = () => {
		navigate("/animation");
	};

	const [pageOptions, setPageOptions] = useState({
		current: 1,
		pageSize: 10,
		total: 99,
	});

	const handleChange = (current) => {
		setPageOptions({ ...pageOptions, current: current });
	};

	const getMenu = () => {
		localStorage.setItem("router", JSON.stringify([{ path: "test", component: "demo/Test" }]));
	};

	return (
		<Row justify="center" className="content-body home-box">
			<Col span={24}>
				{t("msg")}
				<Pagination total={85} showSizeChanger showQuickJumper showTotal={(total) => `${t("antd.paginationTotal", { total: total })}`}></Pagination>
				<Switch defaultChecked onChange={onChange} />
				<Button onClick={toDemo}>to demo</Button>
				{pageOptions.current}
				<RePagination
					current={pageOptions.current}
					pageSize={pageOptions.pageSize}
					total={pageOptions.total}
					handleChange={handleChange}></RePagination>
				<Button onClick={getMenu}>test dym router</Button>
			</Col>
		</Row>
	);
}
