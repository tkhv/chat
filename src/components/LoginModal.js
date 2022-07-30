import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./LoginModal.module.css";
import TextField from "./ui/TextField";

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
          <div className={classes.roundInputContainer}>
            <div className={classes.handleInput}>
              <TextField placeholder="Handle" ref={handleRef} />
            </div>
            <div className={classes.inputRow}>
              <div className={classes.handleInput}>
                <TextField placeholder="Password" ref={passRef} />
              </div>
              <div className={classes.btnContainer}>
                <button type="submit" className={classes.btnLogin}>
                  <img
                    src="./btnLogin.png"
                    alt="login button"
                    className={classes.btnImg}
                  />
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginModal;
