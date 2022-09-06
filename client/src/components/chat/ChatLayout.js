import { useContext, useState } from "react";
//import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import MessageBar from "./MessageBar";
import MessageDock from "./MessageDock";
import Sidebar from "./Sidebar";
import AuthContext from "../../context/auth-context";

function ChatLayout(props) {
  const [messages, updateMessages] = useState([]);

  const loadMessages = async () => {
    try {
      const res = await fetch("http://http://localhost:3001/api/chat", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let response = await res.json();
      console.log(response.messageList);
      return response.messageList;
    } catch (err) {
      console.log(err);
    }
  };

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

  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.chatWindow}>
        <MessageDock messages={messages} loadMessages={loadMessages} />
        <MessageBar sendHandler={sendHandler} />
      </div>
    </div>
  );
}

export default ChatLayout;
