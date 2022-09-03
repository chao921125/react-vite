import React from "react";
import ReactDOM from "react-dom/client";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";
import { store, persist } from "@/store";
import App from "./App";
import "antd/dist/antd.less";
import "@/assets/style/index.css";

// react 18 创建（会导致 antd 菜单折叠时闪烁，等待官方修复）
ReactDOM.createRoot(document.getElementById("root")!).render(
	// * react严格模式
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate persistor={persist}>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>,
);
