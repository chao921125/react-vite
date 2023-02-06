// @ts-ignore
import { Shake } from "reshake";

// https://elrumordelaluz.github.io/reshake/
// https://animxyz.com/docs#react-installation
// https://animista.net/play/basic
// https://docs.ethers.io/v5/getting-started/#getting-started--connecting
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
			<Shake h={5} v={10} r={2} dur={300} int={10} max={100} fixed={true} fixedStop={false} freez={false}>
				<h1> Shake </h1>
			</Shake>
		</>
	);
}
