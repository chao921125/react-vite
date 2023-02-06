import { ethers } from "ethers";

export async function connect() {
	try {
		if (!window.ethereum) {
			window.ethers = undefined;
			return;
		}
		window.ethers = new ethers.providers.Web3Provider(window.ethereum);
	} catch (e) {
		console.log("connect error", e);
	}
}

export async function disConnect() {
	try {
		window.ethereum = undefined;
		window.ethers = undefined;
	} catch (e) {
		console.log(e);
	}
}

export async function getAccount() {
	try {
		if (!window.ethers) await connect();
		const { accounts } = await window.ethers.send("eth_requestAccounts", []);
		return accounts[0];
	} catch (e) {
		console.log("getAccount error", e);
	}
}

export async function getBalance() {
	try {
		if (!window.ethers) await connect();
		const { accounts } = await getAccount();
		const { balance } = await window.ethers.getBalance(accounts[0]);
		return ethers.utils.formatEther(balance);
	} catch (e) {
		console.log("getBalance error", e);
	}
}

export async function getNetwork() {
	try {
		if (!window.ethers) await connect();
		return await window.ethers.getNetwork();
	} catch (e) {
		console.log("getNetwork error", e);
	}
}
