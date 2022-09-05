import { Outlet } from "react-router-dom";
import { Layout } from "antd";

export default function Index() {
	const { Header, Footer, Sider, Content } = Layout;

	const isAdmin = false;

	return (
		<>
			{isAdmin && (
				<Layout>
					<Sider>Sider</Sider>
					<Layout>
						<Header>Header</Header>
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
