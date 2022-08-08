import { useRef, useReducer, useEffect, useState } from "react";
//import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import MessageDock from "./MessageDock";
import TextField from "../ui/TextField";
import RoundedContainer from "../ui/RoundedContainer";
import BtnSend from "../ui/BtnSend";

const msgStateReducer = (state, action) => {
  let update = { ...state };
  if (action.type === "MSG_INPUT") {
    update.enteredMsg = action.value;
    update.disableBtn = action.value.length === 0;
  } else if (action.type === "MSG_SEND") {
    update.messages.push(action.value);
  }
  return update;
};

function ChatLayout() {
  const msgRef = useRef();
  const [disableBtn, setDisableBtn] = useState(true);

  const [msgState, dispatch] = useReducer(msgStateReducer, {
    enteredMsg: "",
    messages: [],
    disableBtn: true,
  });

  const { disableBtn: btn } = msgState;

  useEffect(() => {
    btn ? setDisableBtn(false) : setDisableBtn(true);
    console.log("CHECK");
  }, [btn]);

  function submitHandler(event) {
    event.preventDefault();
    if (!msgState.disableBtn) {
      dispatch({
        type: "MSG_SEND",
        value: {
          id: Date.now(),
          handle: "arsa",
          msg: msgRef.current.value,
        },
      });
      dispatch({ type: "MSG_INPUT", value: "" });
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.userCard}></div>
      </div>
      <div className={classes.chatWindow}>
        <MessageDock messages={msgState.messages} />
        <form onSubmit={submitHandler}>
          <RoundedContainer>
            <div className={classes.messageInput}>
              <TextField
                placeholder="Send message..."
                id="msg"
                ref={msgRef}
                value={msgState.enteredMsg}
                onChange={(e) => {
                  dispatch({ type: "MSG_INPUT", value: e.target.value });
                }}
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
