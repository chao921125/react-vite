export default {
	getImgLocal: (name: string) => {
		if (!name) return "";
		// return `/src/assets/images/${type}.png`;
		return new URL(`/src/assets/images/${name}.png`, import.meta.url).href;
	},
};
