import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import "./index.scss";

export default function Index() {
	const { Header, Footer, Sider, Content } = Layout;

	const isAdmin = true;

	return (
		<>
			{isAdmin && (
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
			)}
			{!isAdmin && (
				<Layout>
					<Content>
						<Outlet />
					</Content>
				</Layout>
			)}
		</>
	);
}
