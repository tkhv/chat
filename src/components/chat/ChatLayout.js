import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import MessageDock from "./MessageDock";
import TextField from "../ui/TextField";
import RoundedContainer from "../ui/RoundedContainer";
import BtnSend from "../ui/BtnSend";

function ChatLayout() {
  const msgRef = useRef();
  //const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [enteredMsg, setEnteredMsg] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

  function submitHandler(event) {
    event.preventDefault();
    if (!disableBtn) {
      const input = {
        id: Date.now(),
        handle: "arsa",
        msg: msgRef.current.value,
      };
      setMessages((oldMessages) => {
        return [input, ...oldMessages];
      });
      setEnteredMsg("");
    }
  }

  useEffect(() => {
    enteredMsg.length > 0 ? setDisableBtn(false) : setDisableBtn(true);
  }, [enteredMsg]);

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
              <TextField
                placeholder="Send message..."
                id="msg"
                ref={msgRef}
                onChange={(e) => {
                  setEnteredMsg(e.target.value);
                }}
                value={enteredMsg}
              />
              <BtnSend disabled={disableBtn} />
            </div>
          </RoundedContainer>
        </form>
      </div>
    </div>
  );
}

export default ChatLayout;
