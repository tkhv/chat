import { useState } from "react";
//import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import MessageBar from "./MessageBar";
import MessageDock from "./MessageDock";
import Sidebar from "./Sidebar";

function ChatLayout(props) {
  return (
    <div className={classes.container}>
      <Sidebar />
      <div className={classes.chatWindow}>
        <MessageDock
          messages={props.messages}
          msgDeleteHandler={props.msgDeleteHandler}
        />
        <MessageBar sendHandler={props.sendHandler} />
      </div>
    </div>
  );
}

export default ChatLayout;
