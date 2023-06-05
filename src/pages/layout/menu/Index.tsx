import { useState, useEffect } from "react";
import { AppstoreOutlined, ContainerOutlined, DesktopOutlined, MailOutlined, PieChartOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";

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
		getItem("Option 1", "1", <PieChartOutlined />),
		getItem("Option 2", "2", <DesktopOutlined />),
		getItem("Option 3", "3", <ContainerOutlined />),

		getItem("Navigation OneOne", "sub1", <MailOutlined />, [
			getItem("Option 5", "5"),
			getItem("Option 6", "6"),
			getItem("Option 7", "7"),
			getItem("Option 8", "8"),
		]),

		getItem("Navigation Two", "sub2", <AppstoreOutlined />, [
			getItem("Option 9", "9"),
			getItem("Option 10", "10"),

			getItem("Submenu", "sub3", null, [getItem("Option 11", "11"), getItem("Option 12", "12")]),
		]),
	];

	const rootSubmenuKeys = ["sub1", "sub2", "sub4"];
	const [openKeys, setOpenKeys] = useState(["sub1"]);

	const onOpenChange: MenuProps["onOpenChange"] = (keys) => {
		const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
		if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
			setOpenKeys(keys);
		} else {
			setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
		}
	};

	useEffect(() => {
		console.log(props);
	}, [props]);

	return (
		<>
			<Menu mode="inline" openKeys={openKeys} onOpenChange={onOpenChange} theme="dark" items={items}></Menu>
		</>
	);
}
