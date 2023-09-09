import React from "react";
import ChatPane from "./chat/ChatPane.jsx";
import ChatSelectPane from "./chat/ChatSelectPane.jsx";
import "./chat/mainChatCSS.css"

function MainChat() {

    return (
        <div style={{display: "flex", height: "100vh"}}>
            <div className="mainChatContainer" style={{height: "inherit"}}>
                {/*<ChatSelectPane />*/}
                <ChatPane />
            </div>
        </div>

    )
}

export default MainChat;