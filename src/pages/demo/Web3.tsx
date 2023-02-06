import { Col, Row, Button } from "antd";
import { useState, useEffect } from "react";
import { ethers } from "ethers";

export default function Web3() {
	const [balance, setBalance] = useState<string | undefined>();
	const [currentAccount, setCurrentAccount] = useState<string | undefined>();
	const [chainId, setChainId] = useState<number | undefined>();
	const [chainname, setChainName] = useState<string | undefined>();

	useEffect(() => {
		if (!currentAccount || !ethers.utils.isAddress(currentAccount)) return;
		//client side code
		if (!window.ethereum) return;
		const provider = new ethers.providers.Web3Provider(window.ethereum);
		provider.getBalance(currentAccount).then((result) => {
			setBalance(ethers.utils.formatEther(result));
		});
		provider.getNetwork().then((result) => {
			setChainId(result.chainId);
			setChainName(result.name);
		});
	}, [currentAccount]);

	const onClickConnect = () => {
		//client side code
		if (!window.ethereum) {
			console.log("please install MetaMask");
			return;
		}
		/*
		//change from window.ethereum.enable() which is deprecated
		//see docs: https://docs.metamask.io/guide/ethereum-provider.html#legacy-methods
		window.ethereum.request({ method: 'eth_requestAccounts' })
		.then((accounts:any)=>{
			if(accounts.length>0) setCurrentAccount(accounts[0])
		})
		.catch('error',console.error)
		*/

		//we can do it using ethers.js
		const provider = new ethers.providers.Web3Provider(window.ethereum);

		// MetaMask requires requesting permission to connect users accounts
		provider
			.send("eth_requestAccounts", [])
			.then((accounts) => {
				if (accounts.length > 0) setCurrentAccount(accounts[0]);
			})
			.catch((e) => console.log(e));
	};

	const onClickDisconnect = () => {
		console.log("onClickDisConnect");
		setBalance(undefined);
		setCurrentAccount(undefined);
	};

	return (
		<>
			<Row>
				<Col span={24}>
					{currentAccount ? <Button onClick={onClickDisconnect}>Account:{currentAccount}</Button> : <Button onClick={onClickConnect}>Connect MetaMask</Button>}
					{currentAccount ? (
						<Col span={24}>
							<Col span={24}>Account info</Col>
							<Col span={24}>ETH Balance of current account: {balance}</Col>
							<Col span={24}>
								Chain Info: ChainId {chainId} name {chainname}
							</Col>
						</Col>
					) : (
						<></>
					)}
				</Col>
			</Row>
		</>
	);
}
