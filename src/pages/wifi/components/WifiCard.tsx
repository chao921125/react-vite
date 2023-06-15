import { Card, Col, Form, Input, Row } from "antd";
import { WifiOutlined } from "@ant-design/icons";
import QRCode from "qrcode.react";
import { useEffect, useImperativeHandle, useState, forwardRef } from "react";

const WifiCard = forwardRef((props: any, ref) => {
	const [qrValue, setQrValue] = useState("");

	const escape = (v) => {
		const needsEscape = ['"', ";", ",", ":", "\\"];

		let escaped = "";
		for (const c of v) {
			if (needsEscape.includes(c)) {
				escaped += `\\${c}`;
			} else {
				escaped += c;
			}
		}
		return escaped;
	};

	// 改变WiFi 改变对应的值
	const [formWifi] = Form.useForm();
	useImperativeHandle(
		ref,
		() => ({
			submitFormWifi: () => {
				console.log("click");
				formWifi.submit();
			},
		}),
		[],
	);

	const onValuesChange = (changedValues) => {
		if (changedValues.name) {
			props.onSSIDChange(changedValues.name);
		} else if (changedValues.password) {
			props.onPasswordChange(changedValues.password);
		} else if (changedValues.identity) {
			props.onEapIdentityChange(changedValues.identity);
		}
	};

	useEffect(() => {
		let options: any = {};

		options.T = props.settings.encryptionMode || "nopass";
		if (props.settings.encryptionMode === "WPA2-EAP") {
			options.E = props.settings.eapMethod;
			options.I = props.settings.eapIdentity;
		}
		options.S = escape(props.settings.ssid);
		options.P = escape(props.settings.password);
		options.H = props.settings.hiddenSSID;

		let data: string = "";
		Object.entries(options).forEach(([k, v]) => (data += `${k}:${v};`));
		const qrVal = `WIFI:${data};`;

		setQrValue(qrVal);
	}, [props.settings]);

	return (
		<>
			<Card
				title={
					<h1>
						<WifiOutlined />
						<span className="re-ml-10">WIFI CARD</span>
					</h1>
				}
				bordered={false}>
				<Row>
					<Col span={24} className={props.settings.direction ? "re-flex-row" : "re-flex-col"}>
						<div className="re-flex-row-center">
							<QRCode className="qr-code re-p-10" value={qrValue} size={150}></QRCode>
						</div>
						<Form layout="vertical" form={formWifi} onValuesChange={onValuesChange} className="re-w-fill">
							<Form.Item label="WIFI Name" name="name" rules={[{ required: true, message: props.ssidError }]}>
								<Input placeholder="WIFI 名称"></Input>
							</Form.Item>
							<Form.Item label="身份" name="identity" rules={[{ required: true, message: props.eapIdentityError }]} hidden={props.settings.encryptionMode !== "WPA2-EAP"}>
								<Input placeholder="用户名"></Input>
							</Form.Item>
							<Form.Item label="WIFI Password" name="password" rules={[{ required: true, message: props.passwordError }]} hidden={props.settings.hidePassword || !props.settings.encryptionMode}>
								<Input.Password placeholder="WIFI 密码"></Input.Password>
							</Form.Item>
						</Form>
					</Col>
				</Row>
			</Card>
		</>
	);
});
export default WifiCard;
