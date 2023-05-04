import { useEffect, useState, useCallback } from "react";

export default function () {
	const [size, setSize] = useState({
		width: window.document.documentElement.clientWidth,
		height: window.document.documentElement.clientHeight,
	});

	const onResize = useCallback(() => {
		setSize({
			width: window.document.documentElement.clientWidth,
			height: window.document.documentElement.clientHeight,
		});
	}, []);

	useEffect(() => {
		window.addEventListener("resize", onResize);
		return () => {
			window.removeEventListener("resize", onResize);
		};
	}, [onResize]);
	return size;
}
