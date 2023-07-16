import Admin from "./frame/Admin";
import Web from "./frame/Web";
import "./index.scss";
Component.displayName = "Layout";
export function Component() {
	const isAdmin = true;

	return (
		<>
			{isAdmin && <Admin></Admin>}
			{!isAdmin && <Web></Web>}
		</>
	);
}
