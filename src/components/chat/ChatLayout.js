import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import MessageBar from "./MessageBar";
import MessageDock from "./MessageDock";

function ChatLayout(props) {
  const [messages, updateMessages] = useState([]);

  function sendHandler(pendingMessage) {
    if (props.sendHandler(pendingMessage)) {
      updateMessages((messages) => {
        return [pendingMessage, ...messages];
      });
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.userCard}></div>
      </div>
      <div className={classes.chatWindow}>
        <MessageDock messages={messages} />
        <MessageBar sendHandler={sendHandler} />
      </div>
    </div>
  );
}

export default ChatLayout;
