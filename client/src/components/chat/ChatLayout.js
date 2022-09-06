import { useContext, useState } from "react";
//import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import MessageBar from "./MessageBar";
import MessageDock from "./MessageDock";
import Sidebar from "./Sidebar";
import AuthContext from "../../context/auth-context";

function ChatLayout(props) {
  const [messages, updateMessages] = useState([{ msg: "OK" }]);

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
        <MessageDock messages={messages} />
        <MessageBar sendHandler={sendHandler} />
      </div>
    </div>
  );
}

export default ChatLayout;
