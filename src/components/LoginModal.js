import { useRef, useReducer } from "react";

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

// TODO: fix rendering on every loginState change instead of only on loginState.disableBtn change

function LoginModal(props) {
  const handleRef = useRef();
  const passRef = useRef();
  let title;

  if (props.login) title = "Enter your handle:";
  else title = "Sign up:";

  const [loginState, dispatch] = useReducer(loginStateReducer, {
    enteredHandle: "",
    enteredPwd: "",
    disableBtn: true,
  });

  function formValidation(event) {
    event.preventDefault();
    if (!loginState.disableBtn) {
      const input = {
        handle: handleRef.current.value,
        password: passRef.current.value,
      };
      if (props.login) props.loginHandler(input);
      else props.signupHandler(input);
    }
  }

  return (
    <div className={classes.center}>
      <div className={classes.handleinputLabel}>{title}</div>
      <form onSubmit={formValidation}>
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
