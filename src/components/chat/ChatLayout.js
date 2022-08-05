import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import MessageDock from "./MessageDock";
import TextField from "../ui/TextField";
import RoundedContainer from "../ui/RoundedContainer";
import BtnSend from "../ui/BtnSend";
import { useState } from "react";

function ChatLayout() {
  const msgRef = useRef();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const input = {
      handle: "arsa",
      msg: msgRef.current.value,
    };
    setMessages((updateMessages) => {
      return [input, ...messages];
    });
  }
  const [messages, setMessages] = useState([]);

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.userCard}></div>
      </div>
      <div className={classes.chatWindow}>
        <MessageDock messages={messages} />
        <form onSubmit={submitHandler}>
          <RoundedContainer>
            <div className={classes.messageInput}>
              <TextField placeholder="Send message..." id="msg" ref={msgRef} />
            </div>
            <BtnSend />
          </RoundedContainer>
        </form>
      </div>
    </div>
  );
}

export default ChatLayout;
