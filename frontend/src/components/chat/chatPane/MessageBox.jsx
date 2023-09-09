import React from "react";

function MessageBox(props) {
    const style = {
        flexDirection: props.bot ? 'row' : 'row-reverse',
        justifyContent: props.bot ? 'left' : 'right'
    }
    return (
        <div className="MessageBoxContainer" style={style}>
            <div className="ProfileContainer" style={{margin: props.bot ? "0 5px 0 0" : "0 0 0 5px"}}>
                <img src={props.bot ? "/ai_avatar.png" : "/user_avatar.png"} height={50}></img>
            </div>

            <div className="MessageBodyContainer">
                {props.content}
            </div>

        </div>
    )
}

export default MessageBox;