import { useEffect, useState } from "react";
import { Form, Checkbox, Radio, Space } from "antd";
import type { RadioChangeEvent } from "antd/es/radio";
import type { CheckboxChangeEvent } from "antd/es/checkbox";

export default function Setting(props: any) {
	const encryptionOptions = [
		{ label: "无", value: "" },
		{ label: "WPA/WPA2/WPA3", value: "WPA" },
		{ label: "WPA2-EAP", value: "WPA2-EAP" },
		{ label: "WEP", value: "WEP" },
	];
	const [encryption, setEncryption] = useState(props.settings.encryptionMode);
	const changeEncryption = ({ target: { value } }: RadioChangeEvent) => {
		setEncryption(value);
		props.onEncryptionModeChange(value);
	};

	const eapOptions = [{ label: "PWD", value: "PWD" }];
	const [eap, setEap] = useState(props.settings.eapMethod);
	const changeEap = ({ target: { value } }: RadioChangeEvent) => {
		setEap(value);
		props.onEapMethodChange(value);
	};

	const changeDirection = (e: CheckboxChangeEvent) => {
		props.onOrientationChange(e.target.checked);
	};

	const changeHiddenSSID = (e: CheckboxChangeEvent) => {
		props.onHiddenSSIDChange(e.target.checked);
	};

	const changeHiddenPassword = (e: CheckboxChangeEvent) => {
		props.onHidePasswordChange(e.target.checked);
	};

	const [formSetting] = Form.useForm();

	useEffect(() => {
		console.log(props.settings.encryptionMode);
		if (props.firstLoad.current && window.innerWidth < 500) {
			props.onFirstLoad();
			props.onOrientationChange(true);
		}
	}, []);

	return (
		<>
			<Form
				layout="vertical"
				form={formSetting}
				className="re-w-fill"
				initialValues={{
					encryption: encryption,
					eap: eap,
				}}>
				<Form.Item label="卡片配置" name="setting">
					<Space>
						<Checkbox checked={props.settings.direction} onChange={changeDirection}>
							卡片方向({props.settings.direction ? "横" : "竖"})
						</Checkbox>
						<Checkbox checked={props.settings.hiddenSSID} onChange={changeHiddenSSID}>
							隐藏 SSID
						</Checkbox>
						<Checkbox checked={props.settings.hidePassword} onChange={changeHiddenPassword}>
							隐藏密码
						</Checkbox>
					</Space>
				</Form.Item>
				<Form.Item label="加密方式" name="encryption">
					<Radio.Group options={encryptionOptions} value={encryption} onChange={changeEncryption}></Radio.Group>
				</Form.Item>
				<Form.Item label="EAP 加密方式" name="eap" hidden={encryption !== "WPA2-EAP"}>
					<Radio.Group options={eapOptions} value={eap} onChange={changeEap}></Radio.Group>
				</Form.Item>
			</Form>
		</>
	);
}
