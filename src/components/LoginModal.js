import { useRef, useReducer } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./LoginModal.module.css";
import RoundedContainer from "./ui/RoundedContainer";
import TextField from "./ui/TextField";
import BtnSend from "./ui/BtnSend";

const loginStateReducer = (state, action) => {
  let update = { ...state };
  if (action.type === "HANDLE_INPUT") update.enteredHandle = action.handleValue;
  if (action.type === "PWD_INPUT") update.enteredPwd = action.pwdValue;
  update.disableBtn =
    update.enteredHandle.length === 0 || update.enteredPwd.length === 0;
  return update;
};

function LoginModal() {
  const handleRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  const [loginState, dispatch] = useReducer(loginStateReducer, {
    enteredHandle: "",
    enteredPwd: "",
    disableBtn: true,
  });

  function submitHandler(event) {
    event.preventDefault();
    if (!loginState.disableBtn) {
      const input = {
        handle: handleRef.current.value,
        password: passRef.current.value,
      };
      console.log(input); // POST data
      navigate("/chat");
    }
  }

  return (
    <div className={classes.center}>
      <div className={classes.handleinputLabel}>Enter your chat handle:</div>
      <form onSubmit={submitHandler}>
        <RoundedContainer>
          <div className={classes.handleInput}>
            <TextField
              placeholder="Handle"
              id="handle"
              ref={handleRef}
              onChange={(e) => {
                dispatch({ type: "HANDLE_INPUT", handleValue: e.target.value });
              }}
            />
          </div>
          <div className={classes.inputRow}>
            <div className={classes.handleInput}>
              <TextField
                placeholder="Password"
                id="password"
                ref={passRef}
                onChange={(e) => {
                  dispatch({ type: "PWD_INPUT", pwdValue: e.target.value });
                }}
              />
            </div>
            <BtnSend disabled={loginState.disableBtn} />
          </div>
        </RoundedContainer>
      </form>
    </div>
  );
}

export default LoginModal;
