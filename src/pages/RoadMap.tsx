import { Row, Col, Image } from "antd";
import "@/assets/styles/page/roadMap.scss";
import Bg from "@/assets/images/page/Roadmap.png";
import Back from "@/components/back/Back";

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
