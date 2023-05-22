import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./index.scss";

export default function Web() {
	const { Content } = Layout;

	return (
		<Layout>
			<Content>
				<Outlet />
			</Content>
		</Layout>
	);
}
