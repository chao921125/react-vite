// import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import "@/plugins/i18n";
import App from "./App";
import "antd/dist/reset.css";
import "animate.css";
import "@/assets/styles/index.scss";

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	// * react严格模式
	// <React.StrictMode>
	<BrowserRouter>
		<RecoilRoot>
			<App></App>
		</RecoilRoot>
	</BrowserRouter>,
	// </React.StrictMode>,
);
