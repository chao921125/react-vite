// import { useNavigate } from "react-router-dom";
import { Row, Col, Image } from "antd";
import { useState } from "react";
import homeBg from "@/assets/images/home/home-bg-no.jpg";
import imgTitle from "@/assets/images/home/animation/01-title.gif";
import imgMenu from "@/assets/images/home/animation/02-menu.gif";
import imgBall from "@/assets/images/home/animation/03-ball.gif";
import imgPMax from "@/assets/images/home/animation/04-person-max.gif";
import imgAirship from "@/assets/images/home/animation/05-airship.gif";
import imgPTitle from "@/assets/images/home/animation/06-person-title.gif";
import imgKiss from "@/assets/images/home/animation/07-kiss.gif";
import imgOpensea from "@/assets/images/home/animation/08-opensea.gif";
import imgSurfing from "@/assets/images/home/animation/09-surfing.gif";
import imgIceBerg from "@/assets/images/home/animation/10-iceberg.gif";
import menuCancel from "@/assets/images/home/menu/menu-cancel.png";
import menuBtn1 from "@/assets/images/home/menu/menu-button1.png";
import menuBtn2 from "@/assets/images/home/menu/menu-button2.png";
import menuBtn3 from "@/assets/images/home/menu/menu-button3.png";
import menuBtn4 from "@/assets/images/home/menu/menu-button4.png";
import menuBtn5 from "@/assets/images/home/menu/menu-button5.png";
import menuBtn6 from "@/assets/images/home/menu/menu-button6.png";
import menuBtn7 from "@/assets/images/home/menu/menu-button7.png";
import "@/assets/styles/page/home.scss";

export default function Index() {
	// const navigate = useNavigate();
	// const toUrl = () => {
	// 	navigate("/web3");
	// };
	// const toUrl2 = () => {
	// 	navigate("/web3-two");
	// };
	const [isShowMenu, setIsShowMenu] = useState(false);
	const changeShowMenu = () => {
		setIsShowMenu(!isShowMenu);
	};
	return (
		<Row justify="center" className="home-box">
			<div className="home-body">
				<Col span={24} className="home-bg-box">
					<Image
						className="home-bg-all"
						preview={false}
						src={homeBg}
						placeholder={<Image preview={false} src={homeBg} width={"100%"} height={"100%"} />}
					></Image>
				</Col>
				<Col span={24} className="home-item-box menu-title-box">
					<Image preview={false} src={imgTitle} className="re-cursor-pointer menu-title"></Image>
				</Col>
				<Col span={24} className="home-item-box menu-btn-box">
					<Image preview={false} src={imgMenu} className="re-cursor-pointer menu-btn" onClick={changeShowMenu}></Image>
				</Col>
				<Col span={24} className="home-item-box menu-ball-box">
					<Image preview={false} src={imgBall} className="re-cursor-pointer menu-ball"></Image>
				</Col>
				<Col span={24} className="home-item-box menu-pm-box">
					<Image preview={false} src={imgPMax} className="re-cursor-pointer menu-pm"></Image>
				</Col>
				<Col span={24} className="home-item-box menu-airship-box">
					<Image preview={false} src={imgAirship} className="re-cursor-pointer menu-airship"></Image>
				</Col>
				<Col span={24} className="home-item-box menu-pt-box">
					<Image preview={false} src={imgPTitle} className="re-cursor-pointer menu-pt"></Image>
				</Col>
				<Col span={24} className="home-item-box menu-kiss-box">
					<Image preview={false} src={imgKiss} className="re-cursor-pointer menu-kiss"></Image>
				</Col>
				<Col span={24} className="home-item-box menu-opensea-box">
					<Image preview={false} src={imgOpensea} className="re-cursor-pointer menu-opensea"></Image>
				</Col>
				<Col span={24} className="home-item-box menu-surfing-box">
					<Image preview={false} src={imgSurfing} className="re-cursor-pointer menu-surfing"></Image>
				</Col>
				<Col span={24} className="home-item-box menu-iceberg-box">
					<Image preview={false} src={imgIceBerg} className="re-cursor-pointer menu-iceberg"></Image>
				</Col>
				{isShowMenu && (
					<Col span={24} className="animate__animated animate__fadeInDown home-item-box menu-list-box">
						<Col span={24} className="menu-btn-right">
							<Image
								preview={false}
								src={menuCancel}
								className="re-cursor-pointer menu-btn-cancel"
								onClick={changeShowMenu}
							></Image>
						</Col>
						<Col span={24} className="menu-btn-center">
							<Image preview={false} src={menuBtn1} className="re-cursor-pointer menu-btn"></Image>
						</Col>
						<Col span={24} className="menu-btn-center">
							<Image preview={false} src={menuBtn2} className="re-cursor-pointer menu-btn"></Image>
						</Col>
						<Col span={24} className="menu-btn-center">
							<Image preview={false} src={menuBtn3} className="re-cursor-pointer menu-btn"></Image>
						</Col>
						<Col span={24} className="menu-btn-center">
							<Image preview={false} src={menuBtn4} className="re-cursor-pointer menu-btn"></Image>
						</Col>
						<Col span={24} className="menu-btn-center">
							<Image preview={false} src={menuBtn5} className="re-cursor-pointer menu-btn"></Image>
						</Col>
						<Col span={24} className="menu-btn-center">
							<Image preview={false} src={menuBtn6} className="re-cursor-pointer menu-btn"></Image>
						</Col>
						<Col span={24} className="menu-btn-center">
							<Image preview={false} src={menuBtn7} className="re-cursor-pointer menu-btn"></Image>
						</Col>
					</Col>
				)}
			</div>
		</Row>
	);
}
