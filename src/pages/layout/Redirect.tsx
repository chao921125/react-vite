import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Redirect(props: any) {
	console.log(props);
	let navigate = useNavigate();
	useEffect(() => {
		navigate("/");
	});
	return <template></template>;
}
