// import { useNavigate } from "react-router-dom";
import { Image } from "antd";
import homeBg from "@/assets/images/bg/home.jpg";

export default function Index() {
	// const navigate = useNavigate();
	// const toUrl = () => {
	// 	navigate("/web3");
	// };
	// const toUrl2 = () => {
	// 	navigate("/web3-two");
	// };
	return (
		<>
			<Image
				width={"100%"}
				height={"100%"}
				preview={false}
				src={homeBg}
				placeholder={<Image preview={false} src={homeBg} width={"100%"} height={"100%"} />}
			/>
		</>
	);
}
