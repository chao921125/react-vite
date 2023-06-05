import { Outlet } from "react-router-dom";
import { Layout } from "antd";
import MenuInline from "../menu/Index";
import "./index.scss";
import { useState } from "react";

export default function Admin() {
	const { Header, Footer, Sider, Content } = Layout;

	const [collapsed, setCollapsed] = useState(false);

	const toggleCollapsed = () => {
		setCollapsed(!collapsed);
	};

	return (
		<Layout>
			<Sider collapsible collapsed={collapsed} onCollapse={toggleCollapsed} collapsedWidth={60} width={300}>
				<MenuInline isCollapsed={collapsed}></MenuInline>
			</Sider>
			<Layout>
				<Header className="reset-header">Header</Header>
				<Content>
					<div>tags</div>
					<Outlet />
				</Content>
				<Footer>Footer</Footer>
			</Layout>
		</Layout>
	);
}
