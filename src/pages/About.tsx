import { Row, Col, Image } from "antd";
import Back from "@/components/back/Back";
import Bg from "@/assets/images/page/about.png";
import icon1 from "@/assets/images/about/concat/ct-1.png";
import icon2 from "@/assets/images/about/concat/ct-2.png";
import icon3 from "@/assets/images/about/concat/ct-3.png";
import icon4 from "@/assets/images/about/concat/ct-4.png";
import icon5 from "@/assets/images/about/concat/ct-5.png";
import "@/assets/styles/page/about.scss";

export default function About() {
	const toCt = (url: string) => {
		window.location.href = url || "";
	};
	return (
		<Row justify="center" className="content-body">
			<Col span={24}>
				<Back></Back>
				<Image preview={false} src={Bg} className="bg-img"></Image>
				<div className="about-menu-ct">
					<Image
						preview={false}
						src={icon1}
						className="re-cursor-pointer about-icon-ct"
						onClick={() => toCt("https://mobile.twitter.com/TheTaleWeTell")}></Image>
					<Image preview={false} src={icon2} className="re-cursor-pointer about-icon-ct"></Image>
					<Image preview={false} src={icon3} className="re-cursor-pointer about-icon-ct"></Image>
					<Image
						preview={false}
						src={icon4}
						className="re-cursor-pointer about-icon-ct"
						onClick={() => toCt("https://www.instagram.com/thetalewetell?utm_source=qr")}></Image>
					<Image preview={false} src={icon5} className="re-cursor-pointer about-icon-ct"></Image>
				</div>
			</Col>
		</Row>
	);
}
