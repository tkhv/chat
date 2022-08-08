import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./LoginModal.module.css";
import RoundedContainer from "./ui/RoundedContainer";
import TextField from "./ui/TextField";
import BtnSend from "./ui/BtnSend";

function LoginModal(props) {
  const handleRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const [enteredHandle, changeEnteredHandle] = useState("");
  const [enteredPwd, changeEnteredPwd] = useState("");
  const [disableBtn, setDisableBtn] = useState(true);

  function submitHandler(event) {
    event.preventDefault();
    if (!disableBtn) {
      const input = {
        handle: handleRef.current.value,
        password: passRef.current.value,
      };
      console.log(input); // POST data
      navigate("/chat");
    }
  }

  useEffect(() => {
    enteredHandle.length > 0 && enteredPwd.length > 0
      ? setDisableBtn(false)
      : setDisableBtn(true);
  }, [enteredHandle, enteredPwd]);

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
                changeEnteredHandle(e.target.value);
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
                  changeEnteredPwd(e.target.value);
                }}
              />
            </div>
            <BtnSend disabled={disableBtn} />
          </div>
        </RoundedContainer>
      </form>
    </div>
  );
}

export default LoginModal;
