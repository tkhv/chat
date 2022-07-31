import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import TextField from "../ui/TextField";
import RoundedContainer from "../ui/RoundedContainer";
import BtnSend from "../ui/BtnSend";

function ChatLayout() {
  const msgRef = useRef();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const input = {
      handle: msgRef.current.value,
    };
    console.log(input); // POST data
  }

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.userCard}></div>
      </div>
      <div className={classes.chatWindow}>
        <div className={classes.messageDock}></div>

        <form onSubmit={submitHandler}>
          <RoundedContainer>
            <div className={classes.messageInput}>
              <TextField placeholder="Send message..." ref={msgRef} />
            </div>
            <BtnSend />
          </RoundedContainer>
        </form>
      </div>
    </div>
  );
}

export default ChatLayout;
