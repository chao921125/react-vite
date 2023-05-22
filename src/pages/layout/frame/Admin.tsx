import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./index.scss";

export default function Admin() {
	const { Header, Footer, Sider, Content } = Layout;

	return (
		<Layout>
			<Sider>Sider</Sider>
			<Layout>
				<Header className="reset-header">Header</Header>
				<Content>
					<Outlet />
				</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Layout>
	);
}
