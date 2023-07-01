export const auth = {
	// 在绑定元素的父组件
	// 及他自己的所有子节点都挂载完成后调用
	mounted(el: HTMLElement, binding: any) {
		const { value } = binding;
		if (value && value instanceof Array && Array.isArray(value) && value.length) {
			el.hidden = false;
		} else {
			el.hidden = true;
		}
	},
};
