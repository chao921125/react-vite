import Admin from "./frame/Admin";
import Web from "./frame/Web";
import "./index.scss";

export default function Index() {
	const isAdmin = true;

	return (
		<>
			{isAdmin && <Admin></Admin>}
			{!isAdmin && <Web></Web>}
		</>
	);
}
