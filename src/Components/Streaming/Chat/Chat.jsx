import React from "react";
import './Chat.css';


const Chat = () => {
    return (
        <div className="background">
            <div className="chat">
                    <div className="chat-header">
                        <h2>Chat</h2>
                    </div>
                    <div className="chat-box">
                    
                    </div>
                    <div className="message-box">
                        <div class="input-box">
                            <input type="text" required />
                            <button className="btn">Send</button>
                        </div>
                    </div>                  
            </div>
        </div>
    );
};

export default Chat