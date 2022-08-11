import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConfigProvider } from "antd";
import zhCN from "antd/lib/locale/zh_CN";
import store from "./store";
import App from "./App";

ReactDOM.render(
	<Provider store={store}>
		<ConfigProvider locale={zhCN}>
			<App></App>
		</ConfigProvider>
	</Provider>,
	document.getElementById("root"),
);
