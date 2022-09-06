// * global
declare global {
	interface Window {
		__REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
		web3: any;
		ethereum?: {
			isMetaMask?: true;
			request?: (...args: any[]) => Promise<void>;
		};
		BinanceChain?: {
			bnbSign?: (address: string, message: string) => Promise<{ publicKey: string; signature: string }>;
		};
	}
	interface Navigator {
		msSaveOrOpenBlob: (blob: Blob, fileName: string) => void;
		browserLanguage: string;
	}
}
export {};
