import * as React from "react";

export type MessageType = "info" | "warning" | "success" | "danger";

export interface MessageProps {
    text: string,
    type: MessageType,
};

const Message: React.FC<MessageProps> = (props) => {
    const { text, type } = props;
    return (<>
        <div className="message">
            <div className="message-content">
                <div className="text">{ text }</div>
            </div>
        </div>
    </>);
};

export default Message;