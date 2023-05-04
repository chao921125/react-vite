import Resize from "@/plugins/utils/resize";
import { useEffect, useState } from "react";

export default function Screen() {
	const defSize: any = {
		width: 1920,
		height: 1080,
	};
	const [style, setStyle] = useState({
		width: `40px`,
		height: `40px`,
		transform: "scale(1, 1) translate(-50%, -50%)",
		backgroundColor: "#FF00FF",
	});
	useEffect(() => {
		setTimeout(() => {
			initSize();
		}, 500);
	}, []);
	useEffect(() => {
		initSize();
	}, [Resize()]);
	const initSize = (): void => {
		console.log(getScale());
		setStyle({
			width: `100px`,
			height: `100px`,
			transform: `scale(${getScale()[0]}, ${getScale()[1]}) translate(-50%, -50%)`,
			backgroundColor: "#FF00FF",
		});
	};
	const getScale = () => {
		const w = document.documentElement.clientWidth / defSize.width;
		const h = document.documentElement.clientHeight / defSize.height;
		return [w, h];
	};
	return <div style={style}>111111</div>;
}
