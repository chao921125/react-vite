import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import BackImg from "@/assets/images/icon/back.gif";
import "./index.scss";
import { useEffect, useState } from "react";
import Resize from "@/plugins/utils/resize";

export default function Back() {
	const rootSize = { width: 1920, height: 1080 };
	const [imgMenuInfo, setImgMenuInfo] = useState({ width: 1, height: 1, top: 1, left: 1 });
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
	};

	const navigate = useNavigate();
	const toHome = () => {
		navigate("/");
	};
	return (
		<>
			<Image
				preview={false}
				src={BackImg}
				className="back-img"
				style={{ width: imgMenuInfo.width, height: imgMenuInfo.height }}
				onClick={toHome}
			></Image>
		</>
	);
}
