export default [
	{
		title: "首页",
		icon: "<HomeOutlined />",
		key: "/index",
	},
	{
		title: "商品",
		icon: "<ShopOutlined />",
		key: "/productCate",
		children: [
			{
				title: "品类管理",
				icon: "<BarsOutlined />",
				key: "/category",
			},
			{
				title: "商品管理",
				icon: "<CalendarOutlined />",
				key: "/product",
			},
		],
	},
	{
		title: "用户管理",
		icon: "<UserOutlined />",
		key: "/user",
	},
	{
		title: "角色管理",
		icon: "<SafetyCertificateOutlined />",
		key: "/role",
	},
];
