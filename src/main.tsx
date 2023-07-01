import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import App from "./App";
import "@/plugins/i18n";
// import "antd/dist/reset.css";
import "animate.css";
import "@/assets/styles/index.scss";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<RecoilRoot>
			<App></App>
		</RecoilRoot>
	</React.StrictMode>,
);
