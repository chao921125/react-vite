import { useRef, useState } from "react";
import { Button, Col, Row } from "antd";
import { WifiOutlined } from "@ant-design/icons";
import WifiCard from "./components/WifiCard";
import Setting from "./components/Setting";
import "./index.scss";

Component.displayName = "Wifi";
export function Component() {
	const firstLoad = useRef(true);
	const [settings, setSettings] = useState({
		// Network SSID name
		ssid: "",
		// Network password
		password: "",
		// Settings: Network encryption mode
		encryptionMode: "WPA",
		// Settings: EAP Method
		eapMethod: "PWD",
		// Settings: EAP identity
		eapIdentity: "",
		// Settings: Hide password on the printed card
		hidePassword: false,
		// Settings: Mark your network as hidden SSID
		hiddenSSID: false,
		// Settings: Direction true transverse false portrait
		direction: true,
	});
	const [errors, setErrors] = useState({
		ssidError: "",
		passwordError: "",
		eapIdentityError: "",
	});

	const wifiRef = useRef(null);

	const [isSubmit, setIsSubmit] = useState(false);
	const validateFormWifi = (rel) => {
		setIsSubmit(rel);
	};
	const onPrint = () => {
		if (isSubmit) {
			const oldHtml = document.body.innerHTML;
			const newHtml = document!.querySelector(".ant-card")!.innerHTML;
			document.title = "WiFi Card - " + settings.ssid;
			document.body.innerHTML = newHtml;
			window.print();
			document.body.innerHTML = oldHtml;
			return false;
		}
		if (!settings.ssid.length) {
			setErrors({
				...errors,
				ssidError: "name not null",
			});
			return;
		}
		if (settings.password.length < 8 && settings.encryptionMode === "WPA") {
			setErrors({
				...errors,
				passwordError: "password length not less than 8",
			});
			return;
		}
		if (settings.password.length < 5 && settings.encryptionMode === "WEP") {
			setErrors({
				...errors,
				passwordError: "password length not less than 5",
			});
			return;
		}
		if (settings.password.length < 1 && settings.encryptionMode === "WPA2-EAP") {
			setErrors({
				...errors,
				passwordError: "password error",
			});
			return;
		}
		if (settings.eapIdentity.length < 1 && settings.encryptionMode === "WPA2-EAP") {
			setErrors({
				...errors,
				eapIdentityError: "eapIdentity error",
			});
			return;
		}
	};

	const onSSIDChange = (ssid) => {
		setErrors({ ...errors, ssidError: "" });
		setSettings({ ...settings, ssid });
	};
	const onPasswordChange = (password) => {
		setErrors({ ...errors, passwordError: "" });
		setSettings({ ...settings, password });
	};
	const onEncryptionModeChange = (encryptionMode) => {
		setErrors({ ...errors, passwordError: "" });
		setSettings({ ...settings, encryptionMode });
	};
	const onEapMethodChange = (eapMethod) => {
		setSettings({ ...settings, eapMethod });
	};
	const onEapIdentityChange = (eapIdentity) => {
		setErrors({ ...errors, eapIdentityError: "" });
		setSettings({ ...settings, eapIdentity });
	};
	const onOrientationChange = (direction) => {
		setSettings({ ...settings, direction });
	};
	const onHidePasswordChange = (hidePassword) => {
		setSettings({ ...settings, hidePassword });
	};
	const onHiddenSSIDChange = (hiddenSSID) => {
		setSettings({ ...settings, hiddenSSID });
	};
	const onFirstLoad = () => {
		firstLoad.current = false;
	};

	return (
		<>
			<Row justify="center" className="wifi">
				<Col span={12}>
					<div className="re-flex-row">
						<WifiOutlined className="title" />
						<h1 className="re-ml-10 title">WiFi</h1>
					</div>
					<WifiCard
						id="wifi"
						ref={wifiRef}
						settings={settings}
						ssidError={errors.ssidError}
						passwordError={errors.passwordError}
						eapIdentityError={errors.eapIdentityError}
						onSSIDChange={onSSIDChange}
						onEapIdentityChange={onEapIdentityChange}
						onPasswordChange={onPasswordChange}
						submitForm={validateFormWifi}
					/>
					<Setting
						settings={settings}
						firstLoad={firstLoad}
						onFirstLoad={onFirstLoad}
						onEncryptionModeChange={onEncryptionModeChange}
						onEapMethodChange={onEapMethodChange}
						onOrientationChange={onOrientationChange}
						onHidePasswordChange={onHidePasswordChange}
						onHiddenSSIDChange={onHiddenSSIDChange}
					/>
					<Button id="print" type="primary" onClick={onPrint}>
						print
					</Button>
				</Col>
			</Row>
		</>
	);
}
