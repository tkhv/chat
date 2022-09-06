import { useRef, useReducer, useEffect, useState } from "react";

import classes from "./MessageBar.module.css";
import TextField from "../ui/TextField";
import RoundedContainer from "../ui/RoundedContainer";
import BtnSend from "../ui/BtnSend";

// TODO: fix rendering on every msgState change instead of only on msgState.disableBtn change

const msgStateReducer = (state, input) => {
  let update = { ...state };
  update.enteredMsg = input;
  update.disableBtn = input.length === 0 || input.length > 2000;
  return update;
};

function MessageBar(props) {
  const msgRef = useRef();
  const [disableBtn, setDisableBtn] = useState(true);

  const [msgState, dispatch] = useReducer(msgStateReducer, {
    enteredMsg: "",
    disableBtn: true,
  });

  const { disableBtn: btn } = msgState;
  useEffect(() => {
    setDisableBtn(btn);
  }, [btn]);

  function formValidate(event) {
    event.preventDefault();
    if (!msgState.disableBtn) {
      props.sendHandler(msgRef.current.value);
      dispatch("");
    }
  }

  return (
    <form onSubmit={formValidate}>
      <RoundedContainer>
        <div className={classes.messageInput}>
          <TextField
            placeholder={props.placeholder}
            id="msg"
            ref={msgRef}
            value={msgState.enteredMsg}
            onChange={(e) => {
              dispatch(e.target.value);
            }}
          />
          <BtnSend disabled={disableBtn} />
        </div>
      </RoundedContainer>
    </form>
  );
}

export default MessageBar;
