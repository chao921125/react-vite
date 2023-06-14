import { useState, useEffect } from "react";
import { MailOutlined, PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import { useNavigate } from "react-router-dom";

export default function MenuInline(props: any) {
	type MenuItem = Required<MenuProps>["items"][number];
	function getItem(label: React.ReactNode, key: React.Key, icon?: React.ReactNode, children?: MenuItem[], type?: "group"): MenuItem {
		return {
			key,
			icon,
			children,
			label,
			type,
		} as MenuItem;
	}
	const items: MenuItem[] = [
		getItem("Home", "home", <PieChartOutlined />),
		getItem("示例", "demo", <MailOutlined />, [getItem("WIFI", "wifi"), getItem("动画", "demo-animation"), getItem("盒子", "demo-screen")]),
	];

	const rootSubmenuKeys = ["home", "demo"];
	const [openKeys, setOpenKeys] = useState(["home"]);

	const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};

	const navigate = useNavigate();
	const toRouter = ({ key }) => {
		navigate(`/${key}`);
	};

	useEffect(() => {
		console.log(props);
	}, [props]);

	return (
		<>
			<Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} theme="dark" items={items} onSelect={toRouter}></Menu>
		</>
	);
}
