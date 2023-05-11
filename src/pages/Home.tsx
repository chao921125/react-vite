import { Row, Col, Pagination, Switch } from "antd";
import { useSetRecoilState } from "recoil";
import Store from "@/store";
import "@/assets/styles/page/home.scss";

export default function Home() {
	const onChange = (checked: boolean) => {
		console.log(`switch to ${checked}`);
		if (checked) {
			const setTheme = useSetRecoilState(Store.Theme.themeState);
			setTheme((oldValue) => {
				oldValue, { i18n: "zh-cn" };
			});
		} else {
			const setTheme = useSetRecoilState(Store.Theme.themeState);
			setTheme((oldValue) => {
				oldValue, { i18n: "en-us" };
			});
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
