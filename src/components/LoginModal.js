import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./LoginModal.module.css";
import RoundedContainer from "./ui/RoundedContainer";
import TextField from "./ui/TextField";
import BtnSend from "./ui/BtnSend";

function LoginModal(props) {
  const handleRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();

  function submitHandler(event) {
    event.preventDefault();
    const input = {
      handle: handleRef.current.value,
      password: passRef.current.value,
    };
    console.log(input); // POST data
    navigate("/chat");
  }

  return (
    <div className={classes.center}>
      <div>
        <div className={classes.handleinputLabel}>Enter your chat handle:</div>
        <form onSubmit={submitHandler}>
          <RoundedContainer>
            <div className={classes.handleInput}>
              <TextField placeholder="Handle" id="handle" ref={handleRef} />
            </div>
            <div className={classes.inputRow}>
              <div className={classes.handleInput}>
                <TextField placeholder="Password" id="password" ref={passRef} />
              </div>
              <BtnSend />
            </div>
          </RoundedContainer>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;

/*<form onSubmit={submitHandler}>
          <RoundedContainer></RoundedContainer>
          <div className={classes.roundInputContainer}>
            <div className={classes.handleInput}>
              <TextField placeholder="Handle" ref={handleRef} />
            </div>
            <div className={classes.inputRow}>
              <div className={classes.handleInput}>
                <TextField placeholder="Password" ref={passRef} />
              </div>
            </div>
          </div>
        </form> */
