import { Row, Col, Pagination, Switch } from "antd";
import Store from "@/store";
import "@/assets/styles/page/home.scss";

export default function Home() {
	const onChange = (checked: boolean) => {
		console.log(`switch to ${checked}`);
		if (checked) {
			Store.Theme.setTheme({ i18n: "zh-cn" });
		} else {
			Store.Theme.setTheme({ i18n: "en-us" });
		}
	};

	return (
		<Row justify="center" className="content-body home-box">
			<Col span={24}>
				<Pagination total={85} showSizeChanger showQuickJumper showTotal={(total) => `Total ${total} items`}></Pagination>
				<Switch defaultChecked onChange={onChange} />
			</Col>
		</Row>
	);
}
