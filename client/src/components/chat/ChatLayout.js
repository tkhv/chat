import { useContext, useState } from "react";
//import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import MessageBar from "./MessageBar";
import MessageDock from "./MessageDock";
import Sidebar from "./Sidebar";
import AuthContext from "../../context/auth-context";

function ChatLayout(props) {
  const [messages, updateMessages] = useState([]);

  const authCtx = useContext(AuthContext);
  function sendHandler(pendingMessage) {
    if (authCtx.isLoggedIn) {
      pendingMessage.handle = authCtx.handle;
      pendingMessage.key = Date.now();
      updateMessages((messages) => {
        return [pendingMessage, ...messages];
      });
    }
  }
  console.log(props.messages);
  function msgDeleteHandler(messageId) {
    // TODO: Fix message deletion
    console.log(messages);
    if (authCtx.isLoggedIn) {
      console.log(messageId);
      const messageIndex = messages.findIndex(
        (message) => message.time === messageId
      );
      updateMessages((messages) => {
        return messages.splice(messageIndex, 1);
      });
    }
    console.log(messages);
  }

  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.chatWindow}>
        <MessageDock messages={[]} msgDeleteHandler={msgDeleteHandler} />
        <MessageBar sendHandler={sendHandler} />
      </div>
    </div>
  );
}

export default ChatLayout;
