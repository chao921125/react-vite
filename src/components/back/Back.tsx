import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import { useEffect, useState } from "react";
import Resize from "@/plugins/utils/resize";
import BackImg from "@/assets/images/icon/back.gif";
import menuBg from "@/assets/images/home/menu-bg.png";
import menuCancel from "@/assets/images/home/menu/menu-cancel.png";
import menuBtn1 from "@/assets/images/home/menu/menu-button1.png";
import menuBtn2 from "@/assets/images/home/menu/menu-button2.png";
import menuBtn3 from "@/assets/images/home/menu/menu-button3.png";
import menuBtn4 from "@/assets/images/home/menu/menu-button4.png";
import menuBtn5 from "@/assets/images/home/menu/menu-button5.png";
import menuBtn6 from "@/assets/images/home/menu/menu-button6.png";
import "./index.scss";

export default function Back() {
	const rootSize = { width: 1920, height: 1080 };
	const [imgMenuInfo, setImgMenuInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [menuBox, setMenuBox] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [menuBtnCancel, setMenuBtnCancel] = useState({ width: 1, height: 1, top: 1, left: 1 });
	const [menuBtn, setMenuBtn] = useState({ width: 1, height: 1, top: 1, left: 1 });
	useEffect(() => {
		setTimeout(() => {
			initSize();
		}, 500);
	}, []);
	useEffect(() => {
		initSize();
	}, [Resize()]);
	const initSize = () => {
		const imgBgSize = document.querySelector("body")!;
		const rootScale = { width: imgBgSize.clientWidth / rootSize.width, height: imgBgSize.clientHeight / rootSize.height };
		setImgMenuInfo({
			width: 287 * rootScale.width,
			height: 258 * rootScale.height,
			top: 0,
			left: 0,
		});
		setMenuBox({
			width: 445 * rootScale.width,
			height: 2 * rootScale.height,
			top: 30 * rootScale.width,
			left: 45 * rootScale.height,
		});
		setMenuBtnCancel({
			width: 62 * rootScale.width,
			height: 62 * rootScale.height,
			top: 27 * rootScale.width,
			left: 37 * rootScale.height,
		});
		setMenuBtn({
			width: 315 * rootScale.width,
			height: 80 * rootScale.height,
			top: 20 * rootScale.width,
			left: 2 * rootScale.height,
		});
	};

	// menu
	const [isShowMenu, setIsShowMenu] = useState(false);
	const changeShowMenu = () => {
		setIsShowMenu(!isShowMenu);
	};
	// click to url
	const navigate = useNavigate();
	const toHome = () => {
		navigate("/");
	};
	const toAbout = () => {
		navigate("/about");
	};
	const toRoadMap = () => {
		navigate("/road-map");
	};
	return (
		<>
			<Image
				preview={false}
				src={BackImg}
				className="back-img"
				style={{ width: imgMenuInfo.width, height: imgMenuInfo.height }}
				onClick={changeShowMenu}></Image>
			{isShowMenu && (
				<div
					className="animate__animated animate__fadeInDown back-home-item back-menu-list"
					style={{ width: menuBox.width, top: menuBox.top, right: menuBox.left }}>
					<Image preview={false} src={menuBg} className="menu-bg" style={{ width: menuBox.width }}></Image>
					<div className="menu-box">
						<div className="menu-btn-right">
							<Image
								preview={false}
								src={menuCancel}
								className="re-cursor-pointer menu-btn-cancel"
								style={{
									width: menuBtnCancel.width,
									height: menuBtnCancel.height,
									marginTop: menuBtnCancel.top,
									marginRight: menuBtnCancel.left,
								}}
								onClick={changeShowMenu}></Image>
						</div>
						<div className="menu-btn-center">
							<Image
								preview={false}
								src={menuBtn1}
								className="re-cursor-pointer menu-btn"
								style={{ width: menuBtn.width, height: menuBtn.height, marginTop: menuBtn.top, marginBottom: menuBtn.top }}
								onClick={toHome}></Image>
						</div>
						<div className="menu-btn-center">
							<Image
								preview={false}
								src={menuBtn2}
								className="re-cursor-pointer menu-btn"
								style={{ width: menuBtn.width, height: menuBtn.height, marginTop: menuBtn.top, marginBottom: menuBtn.top }}
								onClick={toAbout}></Image>
						</div>
						<div className="menu-btn-center">
							<Image
								preview={false}
								src={menuBtn3}
								className="re-cursor-pointer menu-btn"
								style={{ width: menuBtn.width, height: menuBtn.height, marginTop: menuBtn.top, marginBottom: menuBtn.top }}
								onClick={toRoadMap}></Image>
						</div>
						<div className="menu-btn-center">
							<Image
								preview={false}
								src={menuBtn4}
								className="re-cursor-pointer menu-btn"
								style={{ width: menuBtn.width, height: menuBtn.height, marginTop: menuBtn.top, marginBottom: menuBtn.top }}></Image>
						</div>
						<div className="menu-btn-center">
							<Image
								preview={false}
								src={menuBtn5}
								className="re-cursor-pointer menu-btn"
								style={{ width: menuBtn.width, height: menuBtn.height, marginTop: menuBtn.top, marginBottom: menuBtn.top }}></Image>
						</div>
						<div className="menu-btn-center">
							<Image
								preview={false}
								src={menuBtn6}
								className="re-cursor-pointer menu-btn"
								style={{ width: menuBtn.width, height: menuBtn.height, marginTop: menuBtn.top, marginBottom: menuBtn.top }}></Image>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
