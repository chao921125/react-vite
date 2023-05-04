export default {
	getMenuList() {
		return [
			{
				id: "1", // 唯一的id
				name: "模块一", // 菜单名称
				path: "/model1/dashboard", // 菜单路径
				children: [
					// 子菜单
					{
						id: "2",
						name: "首页",
						path: "/model1/dashboard",
						icon: "",
					},
					{
						id: "3",
						name: "二级菜单",
						path: "/model1",
						icon: "",
						children: [
							{
								id: "6",
								name: "2-1-home",
								path: "/model1/home",
								icon: "",
							},
						],
					},
				],
			},
			{
				id: "4",
				name: "模块二",
				path: "/model2",
			},
			{
				id: "5",
				name: "模块三",
				path: "/model3",
			},
		];
	},
};
