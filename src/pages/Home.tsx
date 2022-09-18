// import { useNavigate } from "react-router-dom";
import { Row, Col, Image } from "antd";
import { useEffect, useState } from "react";
import Resize from "@/plugins/utils/resize";
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
	// ui value
	const rootSize = { width: 1366, height: 768 };
	const [imgTitleInfo, setImgTitleInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgMenuInfo, setImgMenuInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgBallInfo, setImgBallInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgPersonInfo, setImgPersonInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgAirshipInfo, setImgAirshipInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgTextInfo, setImgTextInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgKissInfo, setImgKissInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgOpenInfo, setImgOpenInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgSurfingInfo, setImgSurfingInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [imgIcebergInfo, setImgIcebergInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	useEffect(() => {
		const imgBgSize = document.querySelector("#home-bg-all")!;
		const rootScale = { width: imgBgSize.clientWidth / rootSize.width, height: imgBgSize.clientHeight / rootSize.height };
		setImgTitleInfo({
			width: 700 * rootScale.width,
			height: 210 * rootScale.height,
			top: 20 * rootScale.width,
			left: 340 * rootScale.height,
		});
		setImgMenuInfo({
			width: 100 * rootScale.width,
			height: 100 * rootScale.height,
			top: 50 * rootScale.width,
			left: 20 * rootScale.height,
		});
		setImgBallInfo({
			width: 300 * rootScale.width,
			height: 400 * rootScale.height,
			top: 70 * rootScale.width,
			left: 210 * rootScale.height,
		});
		setImgPersonInfo({
			width: 300 * rootScale.width,
			height: 300 * rootScale.height,
			top: 300 * rootScale.width,
			left: 80 * rootScale.height,
		});
		setImgAirshipInfo({
			width: 500 * rootScale.width,
			height: 300 * rootScale.height,
			top: 480 * rootScale.width,
			left: 660 * rootScale.height,
		});
		setImgTextInfo({
			width: 360 * rootScale.width,
			height: 380 * rootScale.height,
			top: 130 * rootScale.width,
			left: 510 * rootScale.height,
		});
		setImgKissInfo({
			width: 180 * rootScale.width,
			height: 180 * rootScale.height,
			top: 420 * rootScale.width,
			left: 380 * rootScale.height,
		});
		setImgOpenInfo({
			width: 380 * rootScale.width,
			height: 180 * rootScale.height,
			top: 50 * rootScale.width,
			left: 180 * rootScale.height,
		});
		setImgSurfingInfo({
			width: 230 * rootScale.width,
			height: 180 * rootScale.height,
			top: 550 * rootScale.width,
			left: 2 * rootScale.height,
		});
		setImgIcebergInfo({
			width: 280 * rootScale.width,
			height: 280 * rootScale.height,
			top: 2 * rootScale.width,
			left: 2 * rootScale.height,
		});
	}, [Resize()]);

	// menu
	const [isShowMenu, setIsShowMenu] = useState(false);
	const changeShowMenu = () => {
		setIsShowMenu(!isShowMenu);
	};
	// click to url
	// const navigate = useNavigate();
	// const toUrl = () => {
	// 	navigate("/web3");
	// };
	// const toUrl2 = () => {
	// 	navigate("/web3-two");
	// };
	return (
		<Row justify="center" className="home-box">
			<Col span={24} className="home-bg-box">
				<Image
					id="home-bg-all"
					className="home-bg-all"
					preview={false}
					src={homeBg}
					placeholder={<Image preview={false} src={homeBg} width={"100%"} height={"100%"} />}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-title-box" style={{ top: imgTitleInfo.top, left: imgTitleInfo.left }}>
				<Image
					preview={false}
					src={imgTitle}
					className="re-cursor-pointer menu-title"
					style={{ width: imgTitleInfo.width, height: imgTitleInfo.height }}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-btn-box" style={{ top: imgMenuInfo.top, right: imgMenuInfo.left }}>
				<Image
					preview={false}
					src={imgMenu}
					className="re-cursor-pointer menu-btn"
					style={{ width: imgMenuInfo.width, height: imgMenuInfo.height }}
					onClick={changeShowMenu}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-ball-box" style={{ top: imgBallInfo.top, right: imgBallInfo.left }}>
				<Image
					preview={false}
					src={imgBall}
					className="re-cursor-pointer menu-ball"
					style={{ width: imgBallInfo.width, height: imgBallInfo.height }}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-pm-box" style={{ top: imgPersonInfo.top, right: imgPersonInfo.left }}>
				<Image
					preview={false}
					src={imgPMax}
					className="re-cursor-pointer menu-pm"
					style={{ width: imgPersonInfo.width, height: imgPersonInfo.height }}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-airship-box" style={{ top: imgAirshipInfo.top, left: imgAirshipInfo.left }}>
				<Image
					preview={false}
					src={imgAirship}
					className="re-cursor-pointer menu-airship"
					style={{ width: imgAirshipInfo.width, height: imgAirshipInfo.height }}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-pt-box" style={{ top: imgTextInfo.top, left: imgTextInfo.left }}>
				<Image
					preview={false}
					src={imgPTitle}
					className="re-cursor-pointer menu-pt"
					style={{ width: imgTextInfo.width, height: imgTextInfo.height }}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-kiss-box" style={{ top: imgKissInfo.top, left: imgKissInfo.left }}>
				<Image
					preview={false}
					src={imgKiss}
					className="re-cursor-pointer menu-kiss"
					style={{ width: imgKissInfo.width, height: imgKissInfo.height }}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-opensea-box" style={{ top: imgOpenInfo.top, left: imgOpenInfo.left }}>
				<Image
					preview={false}
					src={imgOpensea}
					className="re-cursor-pointer menu-opensea"
					style={{ width: imgOpenInfo.width, height: imgOpenInfo.height }}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-surfing-box" style={{ top: imgSurfingInfo.top, left: imgSurfingInfo.left }}>
				<Image
					preview={false}
					src={imgSurfing}
					className="re-cursor-pointer menu-surfing"
					style={{ width: imgSurfingInfo.width, height: imgSurfingInfo.height }}
				></Image>
			</Col>
			<Col span={24} className="home-item-box menu-iceberg-box" style={{ top: imgIcebergInfo.top, left: imgIcebergInfo.left }}>
				<Image
					preview={false}
					src={imgIceBerg}
					className="re-cursor-pointer menu-iceberg"
					style={{ width: imgIcebergInfo.width, height: imgIcebergInfo.height }}
				></Image>
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
		</Row>
	);
}
