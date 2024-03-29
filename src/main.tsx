// import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import "@/plugins/i18n";
// import "antd/dist/reset.css";
import "animate.css";
import "@/assets/styles/index.scss";

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// * react严格模式
	// <React.StrictMode>
	<RecoilRoot>
		<App></App>
	</RecoilRoot>,
	// </React.StrictMode>,
);
