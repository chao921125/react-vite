import axios from "axios";
import http from "./http";
import storage from "./storage";

const baseAPI = "/api/v1";

export function GetRateSOL() {
	const timestamp = new Date().getTime();
	const timestampOld = Number(storage.getItem("rateTimestamp"));
	const minVal = 60 * 1000;
	if (timestampOld && timestamp - timestampOld < minVal) {
		return new Promise((resolve, reject) => {
			resolve(storage.getItem("ratePrice"));
		});
	} else {
		return new Promise((resolve, reject) => {
			http("get", "/v2/coin/zNZHO_Sjf/price", {}).then(
				(res: any) => {
					if (timestamp.toString().length - res.data.timestamp.toString().length) {
						const len: number = timestamp.toString().length - res.data.timestamp.toString().length;
						let val: number = 0;
						switch (len) {
							case 1:
								val = 10;
								break;
							case 2:
								val = 100;
								break;
							case 3:
								val = 1000;
								break;
							case 4:
								val = 10000;
								break;
							default:
								val = 1000;
								break;
						}
						storage.setItem("rateTimestamp", res.data.timestamp * val);
					} else {
						storage.setItem("rateTimestamp", res.data.timestamp);
					}
					// storage.setItem("ratePrice", Number(res.data.price).toFixed(2));
					// resolve (Number(res.data.price).toFixed(2));
					storage.setItem("ratePrice", Number(res.data.price));
					resolve(Number(res.data.price));
				},
				error => {
					reject(error);
				},
			);
		});
	}
}

export async function getMapInfo(): Promise<any> {
	try {
		const data = await http("get", baseAPI + "/map/world", { mark: "A" });
		return data;
	} catch {
		return null;
	}
}
export async function getMapPlan(worldMapId: number): Promise<any> {
	try {
		const data = await http("get", baseAPI + "/map/plan", { worldMapId });
		return data;
	} catch {
		return null;
	}
}

export async function getMapPlanDetail(worldMapId: number, planMapId: string): Promise<any> {
	try {
		const data = await http("get", baseAPI + "/map/plan-detail", { worldMapId, planMapId });
		return data;
	} catch {
		return null;
	}
}
/**
 * {
 *   "email": "string"
 *   // application: 1
 * }
 * */
export function EmailSubscribe(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/email/subscribe", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "email": "string"
 * }
 * */
export function EmailCode(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/email/code", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "email": "string",
 *   "password": "string"
 * }
 * */
export function LoginEmail(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/login/pwd", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "email": "string",
 *   "code": "string"
 * }
 * */
export function CheckEmailCode(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/register/retrieve-pwd", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "id": "string",
 *   "password": "string"
 * }
 * */
export function ResetPwd(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/register/confirm-pwd", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "username": "string",
 *   "surname": "string",
 *   "givenname": "string",
 *   "email": "string",
 *   "code": "string",
 *   "password": "string"
 * }
 * */
export function RegisterEmail(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/register/email", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "phone": "string",
 *   "areaCode": "string",
 * }
 * */
export function SendPhoneCode(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/sms/send-code", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "phone": "string",
 *   "areaCode": "string",
 *   "code": "string",
 * }
 * */
export function BindPhone(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/user/bind-phone", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "taskId": "string",
 * }
 * */
export function getTask(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/task/detail", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "taskId": "string",
 *   "awardWhere": "string",
 * }
 * */
export function taskReceive(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/task/receive", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 * }
 * */
export function InviteCodeList(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/user/invite-friend", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *     "avatar": "string",
 *     "username": "string",
 * }
 * */
export function EditUserInfo(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/user/update-detail", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 * }
 * */
export function CartList(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/cart/list", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "batchId": "string"
 * }
 * */
export function CartAdd(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/cart/add", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "id": "string"
 * }
 * */
export function CartDelete(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("delete", baseAPI + `/cart/${params.id}`, params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "merchantId": "string"
 * }
 * */
export function NftSellInfo(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/nft/sell-batch", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 * }
 * */
export function NftMerchant(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/nft/merchant", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "merchantId": "string"
 * }
 * */
export function NftGet(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/nft/list", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "id": "string"
 * }
 * */
export function NftDetail(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/nft/detail", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "address": "string",
 *   "nftId": "string"
 *   "type": "number" 1 metagaia 2 solana
 * }
 * */
export function NftTransfer(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/nft/transfer", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "batchId": "string",
 *   "cartIds": [
 *     "string"
 *   ]
 * }
 * */
export function OrderNft(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/order/nft", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "metg": 0
 * }
 * */
export function OrderRecharge(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/order/recharge", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "orderId": "string"
 * }
 * */
export function PayStripe(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/pay/stripe", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "orderId": "string"
 * }
 * */
export function PayStripeCallback(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/pay/stripe-callback", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 * }
 * */
export function UserInfo(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/user/detail", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "page": "number"
 *   "pageSize": "number"
 * }
 * */
export function UserCollection(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/user/collection", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "page": "number"
 *   "pageSize": "number"
 * }
 * */
export function UserNftHistory(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/user/nft-history", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "username": "number"
 *   "password": "number"
 * }
 * */
export function adminLogin(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/airdorp/login", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * */
export function adminUserListMint(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/airdorp/list", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "ids": []
 * }
 * */
export function adminMintConfirm(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/airdorp/confirm", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "gToken": "string"
 * }
 * */
export function LoginGoogle(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/login/google", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "gToken": "string",
 *   "username": "string",
 *   "password": "string",
 *   "inviteCode": "string"
 * }
 * */
export function RegisterGoogle(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/register/google", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "oldPwd": "string",
 *   "password": "string",
 * }
 * */
export function ChangePwd(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/setting/edit-pwd", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "status": "boolean"
 * }
 * */
export function IsOpenTFA(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/setting/tfa", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "secret": "string",
 *   "code": "string"
 * }
 * */
export function ConfirmTFA(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/setting/tfa-confirm", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "code": "string",
 *   "key": "string"
 * }
 * */
export function CheckTFA(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/login/tfa-check", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "page": "number"
 *   "pageSize": "number"
 * }
 * */
export function TokenLogs(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/user-account/logs", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "value": "number",
 *   "address": "string"
 * }
 * */
export function UserTransfer(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/user-account/transfer", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}
/**
 * {
 *   "page": "number"
 *   "pageSize": "number"
 *   "type": "string"
 * }
 * */
export function ListLogs(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/user/collection", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "userNftId": "string"
 *   "metg": "number"
 * }
 * */
export function CreateList(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/consignment/create", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "consignmentId": "string"
 * }
 * */
export function ListCancel(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/consignment/cancel", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}
/**
 * {
 *   "page": "number", * 1
 *   "pageSize": "number", * 10
 *   "type": "sting", * 1 hero, 2 hexa
 *   "order": "sting", / 1 编号正序, 2 编号倒序, 3 价格正序, 4 价格倒序, 5 时间倒序
 *   "rarityFilter": "sting", / common, rare, super rare, ultra rare, extreme
 *   "classFilter": "sting", / Demolisher, Sniper, Tanker, Striker, Shooter, Bomber, Supporter, Influencer, Commander
 * }
 * */
export function MarketListData(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/consignment/list", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "id": "string",
 * }
 * */
export function MarketDetailData(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/consignment/detail", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**consignment
 * {
 *   "id": "string"
 * }
 * */
export function MarketBuy(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/consignment/buy", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**consignment
 * {
 *   "id": "string"
 * }
 * */
export function GameStart(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/application/game-start", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**consignment
 * {
 *   "id": "string",
 *   "key": "string",
 *   "value": "string",
 * }
 * */
export function GameEnd(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/application/game-award", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**consignment
 * {
 *   "url": "string"
 * }
 * */
export function UrlParams2Obj(params: string) {
	let obj = {
		id: "",
	};
	// @ts-ignore
	params.replace(
		/([^?=&#]+)=([^?=&#]+)/g,
		// @ts-ignore
		(_, key, value) => (obj[key] = value),
	);
	// @ts-ignore
	params.replace(/#([^?=&#]+)/g, (_, hash) => (obj["HASH"] = hash));
	return obj;
}

/**
 * {
 * }
 * */
export function GameList(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/application/games", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "id": "string",
 * }
 * */
export function GameDetailInfo(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/application/game-info", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *   "page": "number"
 *   "pageSize": "number"
 *   "id": "string"
 * }
 * */
export function GameLogs(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("get", baseAPI + "/application/game-logs", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 *  type: string,
 *  address: string
 * }
 * */
export function bindWallet(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/user/bind-wallet", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}

/**
 * {
 * }
 * */
export function unbindWallet(params: any = {}) {
	return new Promise((resolve, reject) => {
		http("post", baseAPI + "/user/unbind-wallet", params).then(
			res => {
				resolve(res);
			},
			error => {
				reject(error);
			},
		);
	});
}
