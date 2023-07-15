import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

Component.displayName = "Redirect";
export function Component(props: any) {
	console.log(props);
	let navigate = useNavigate();
	useEffect(() => {
		navigate("/");
	});
	return <template></template>;
}
