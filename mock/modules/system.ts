import { MockMethod } from "vite-plugin-mock";
import Config from "../config";

const menuList = [
	{
		id: 1,
		path: "home",
		component: "Home",
		name: "message.menu.home",
		title: "message.menu.home",
		icon: "icon-home",
		isLink: 0,
		isIframe: 0,
		address: "",
		isAffix: 1,
		isKeepAlive: 1,
		isDisable: 0,
		isHide: 0,
		isHideSubMenu: 0,
		isMobile: 0,
		roles: ["admin", "system"],
		permission: ["C", "R", "U", "D"],
		children: [],
	},
	{
		id: 90,
		path: "system",
		component: "layout/Index",
		name: "message.menu.system",
		title: "message.menu.system",
		icon: "icon-setting",
		isLink: 0,
		isIframe: 0,
		address: "",
		isAffix: 0,
		isKeepAlive: 0,
		isDisable: 0,
		isHide: 0,
		isHideSubMenu: 0,
		isMobile: 0,
		roles: ["admin", "system"],
		permission: ["C", "R", "U", "D"],
		children: [
			{
				id: 91,
				path: "user",
				component: "system/user/UserList",
				name: "message.menu.systemUser",
				title: "message.menu.systemUser",
				icon: "icon-user",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 0,
				isKeepAlive: 0,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
			{
				id: 92,
				path: "role",
				component: "system/role/RoleList",
				name: "message.menu.systemRole",
				title: "message.menu.systemRole",
				icon: "icon-user",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 0,
				isKeepAlive: 0,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
			{
				id: 93,
				path: "department",
				component: "system/department/DepartmentList",
				name: "message.menu.systemDepartment",
				title: "message.menu.systemDepartment",
				icon: "icon-user",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 0,
				isKeepAlive: 0,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
			{
				id: 94,
				path: "job",
				component: "system/job/JobList",
				name: "message.menu.systemJob",
				title: "message.menu.systemJob",
				icon: "icon-user",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 0,
				isKeepAlive: 0,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
			{
				id: 99,
				path: "menu",
				component: "system/menu/MenuList",
				name: "message.menu.systemMenu",
				title: "message.menu.systemMenu",
				icon: "icon-layout",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 0,
				isKeepAlive: 0,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
		],
	},
	{
		id: 900,
		path: "demo",
		component: "layout/Index",
		name: "message.menu.demo",
		title: "message.menu.demo",
		icon: "icon-changyongshili",
		isLink: 0,
		isIframe: 0,
		address: "",
		isAffix: 1,
		isKeepAlive: 1,
		isDisable: 0,
		isHide: 0,
		isHideSubMenu: 0,
		isMobile: 0,
		roles: ["admin", "system"],
		permission: ["C", "R", "U", "D"],
		children: [
			{
				id: 901,
				path: "page",
				component: "demo/page/All",
				name: "message.menu.demoPage",
				title: "message.menu.demoPage",
				icon: "icon-appstore",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 1,
				isKeepAlive: 1,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
			{
				id: 902,
				path: "icon",
				component: "demo/icon/Iconify",
				name: "message.menu.demoIcon",
				title: "message.menu.demoIcon",
				icon: "icon-appstore",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 1,
				isKeepAlive: 1,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
			{
				id: 903,
				path: "internal",
				component: "demo/animation/Internal",
				name: "message.menu.demoAnimaCss",
				title: "message.menu.demoAnimaCss",
				icon: "icon-appstore",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 1,
				isKeepAlive: 1,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
			{
				id: 904,
				path: "office-xlsx",
				component: "demo/office/Xlsx",
				name: "message.menu.demoXlsx",
				title: "message.menu.demoXlsx",
				icon: "icon-appstore",
				isLink: 0,
				isIframe: 0,
				address: "",
				isAffix: 1,
				isKeepAlive: 1,
				isDisable: 0,
				isHide: 0,
				isHideSubMenu: 1,
				isMobile: 0,
				roles: ["admin", "system"],
				permission: ["C", "R", "U", "D"],
				children: [],
			},
		],
	},
	{
		id: 991,
		path: "link",
		component: "layout/window/Link",
		name: "message.menu.testLink",
		title: "message.menu.testLink",
		icon: "icon-home",
		isLink: 1,
		isIframe: 0,
		address: "https://cn.bing.com/",
		isAffix: 1,
		isKeepAlive: 1,
		isDisable: 0,
		isHide: 0,
		isHideSubMenu: 0,
		isMobile: 0,
		roles: ["admin", "system"],
		permission: ["C", "R", "U", "D"],
		children: [],
	},
	{
		id: 992,
		path: "iframe",
		component: "layout/window/Iframe",
		name: "message.menu.testIframe",
		title: "message.menu.testIframe",
		icon: "icon-home",
		isLink: 0,
		isIframe: 1,
		address: "https://nodejs.org/zh-cn/",
		isAffix: 1,
		isKeepAlive: 1,
		isDisable: 0,
		isHide: 0,
		isHideSubMenu: 0,
		isMobile: 0,
		roles: ["admin", "system"],
		permission: ["C", "R", "U", "D"],
		children: [],
	},
	{
		id: 9000,
		path: "m-home",
		component: "mobile/MHome",
		name: "message.menu.home",
		title: "message.menu.home",
		icon: "icon-home",
		isLink: 0,
		isIframe: 0,
		address: "",
		isAffix: 1,
		isKeepAlive: 1,
		isDisable: 0,
		isHide: 0,
		isHideSubMenu: 0,
		isMobile: 1,
		roles: ["admin", "system"],
		permission: ["C", "R", "U", "D"],
		children: [],
	},
];

export default [
	{
		url: `${Config.baseUrl}/menu-list`,
		method: "get",
		response: () => {
			return {
				code: 0,
				message: "",
				data: {
					list: menuList,
				},
			};
		},
	},
] as MockMethod[];
