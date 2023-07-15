/**
 * atom 定义单一状态，无需对对象进行加工
 * selector 定义对象，对对象进行加工
 */
/**
 * useRecoilState 用于读写
 * useSetRecoilState 仅用作设置
 * useRecoilValue 用于读 [atom|selector]
 * useRecoilCallback 只读不订阅 数据变化也不会导致当前组件重渲染
 */
import { atom, selector } from "recoil";

export const demoState = atom({
	key: "demoState",
	default: "demo",
});
// async 异步
export const demoNewState = selector({
	key: "demoNewState",
	get: ({ get }) => {
		return get(demoState);
	},
});
