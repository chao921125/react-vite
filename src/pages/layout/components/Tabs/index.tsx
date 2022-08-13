import { Tabs, message } from "antd";
import { HomeFilled } from "@ant-design/icons";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { HOME_URL } from "@/config/config";
import { connect } from "react-redux";
import { setTabsList } from "@/store/modules/tabs/action";
import { routerArray } from "@/router";
import { searchRoute } from "@/plugins/utils/util";
import MoreButton from "./components/MoreButton";
import "./index.less";

const LayoutTabs = (props: any) => {
	const { tabsList, setTabsList } = props;
	const { TabPane } = Tabs;
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const [activeValue, setActiveValue] = useState<string>(pathname);

	useEffect(() => {
		addTabs();
	}, [pathname]);

	// click tabs
	const clickTabs = (path: string) => {
		navigate(path);
	};

	// add tabs
	const addTabs = () => {
		const route = searchRoute(pathname, routerArray);
		let newTabsList = JSON.parse(JSON.stringify(tabsList));
		if (tabsList.every((item: any) => item.path !== route.path)) {
			newTabsList.push({ title: route.meta!.title, path: route.path });
		}
		setTabsList(newTabsList);
		setActiveValue(pathname);
	};

	// delete tabs
	const delTabs = (tabPath?: string) => {
		if (tabPath === HOME_URL) return;
		if (pathname === tabPath) {
			tabsList.forEach((item: Menu.MenuOptions, index: number) => {
				if (item.path !== pathname) return;
				const nextTab = tabsList[index + 1] || tabsList[index - 1];
				if (!nextTab) return;
				navigate(nextTab.path);
			});
		}
		message.success("你删除了Tabs标签 😆😆😆");
		setTabsList(tabsList.filter((item: Menu.MenuOptions) => item.path !== tabPath));
	};

	return (
		<div className="tabs">
			<Tabs
				activeKey={activeValue}
				onChange={clickTabs}
				hideAdd
				type="editable-card"
				onEdit={path => {
					delTabs(path as string);
				}}
			>
				{tabsList.map((item: Menu.MenuOptions) => {
					return (
						<TabPane
							key={item.path}
							tab={
								<span>
									{item.path == HOME_URL ? <HomeFilled /> : ""}
									{item.title}
								</span>
							}
							closable={item.path !== HOME_URL}
						></TabPane>
					);
				})}
			</Tabs>
			<MoreButton delTabs={delTabs} {...props}></MoreButton>
		</div>
	);
};

const mapStateToProps = (state: any) => state.tabs;
const mapDispatchToProps = { setTabsList };
export default connect(mapStateToProps, mapDispatchToProps)(LayoutTabs);
