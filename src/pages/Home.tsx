import { Row, Col, Pagination, Button } from "antd";
import { useNavigate } from "react-router-dom";
import "@/assets/styles/page/home.scss";
import { useTranslation } from "react-i18next";
import RePagination from "@/components/cc-pagination/Index";
import { useState } from "react";

Component.displayName = "Home";
export function Component() {
	const { t } = useTranslation();

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
				<Button onClick={toDemo}>to demo</Button>
				{pageOptions.current}
				<RePagination
					current={pageOptions.current}
					pageSize={pageOptions.pageSize}
					total={pageOptions.total}
					handleChange={handleChange}
				></RePagination>
				<Button onClick={getMenu}>test dym router</Button>
			</Col>
		</Row>
	);
}
