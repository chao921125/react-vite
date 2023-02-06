import { Row, Col, Image } from "antd";
import Bg from "@/assets/images/page/roadmap.png";
import Back from "@/components/back/Back";
import "@/assets/styles/page/roadMap.scss";

export default function RoadMap() {
	return (
		<Row justify="center" className="content-body">
			<Col span={24}>
				<Back></Back>
				<Image preview={false} src={Bg} className="bg-img"></Image>
			</Col>
		</Row>
	);
}
