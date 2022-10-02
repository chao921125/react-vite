import { Row, Col, Image } from "antd";
import Bg from "@/assets/images/page/about.jpg";
import Back from "@/components/back/Back";
import "@/assets/styles/page/roadMap.scss";

export default function About() {
	return (
		<Row justify="center" className="content-body">
			<Col span={24}>
				<Back></Back>
				<Image preview={false} src={Bg} className="bg-img"></Image>
			</Col>
		</Row>
	);
}
