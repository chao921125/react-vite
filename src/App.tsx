import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Index";

export default function App() {
	return (
		<BrowserRouter>
			<Routes>
				{}
				<Route path={"/"} element={<Home />}></Route>
			</Routes>
		</BrowserRouter>
	);
}
