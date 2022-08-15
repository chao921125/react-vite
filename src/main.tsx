import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import App from "./App";
import { store, persist } from "./store";
import "./plugins/language";
import "antd/dist/antd.less";

// react 18
ReactDOM.createRoot(document.getElementById("root")!).render(
	// * react严格模式
	// <React.StrictMode>
	<Provider store={store}>
		<PersistGate persistor={persist}>
			<App />
		</PersistGate>
	</Provider>,
	// </React.StrictMode>
);
