export function setCookie(cname: string, cvalue: any, exdays?: number) {
	if (!cname) {
		cname = "";
	}
	if (!cvalue) {
		cvalue = "";
	}
	if (!exdays) {
		exdays = 30;
	}
	let d = new Date();
	d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
	const expires = "expires=" + d.toUTCString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}

export function getCookie(cname: string) {
	if (!cname) {
		return "";
	}
	let name = cname + "=";
	let ca = document.cookie.split(";");
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i].trim();
		if (c.indexOf(name) === 0) {
			return c.substring(name.length, c.length);
		}
	}
	return "";
}

export function removeCookie(cname: string) {
	setCookie(cname, "", -1);
}
