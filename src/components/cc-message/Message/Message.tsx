import * as React from "react";

export type MessageType = "info" | "warning" | "success" | "danger";

export interface MessageProps {
	text: string;
	type: MessageType;
}

const Message: React.FC<MessageProps> = (props) => {
	const { text, type } = props;
	return (
		<>
			<div className={`message ${type}`}>
				<div className={`message-content ${type}`}>
					<div className={`text ${type}`}>{text}</div>
				</div>
			</div>
		</>
	);
};

export default Message;
