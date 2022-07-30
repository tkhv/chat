import { useRef } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./ChatLayout.module.css";
import TextField from "../ui/TextField";

function ChatLayout() {
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
    <div className={classes.container}>
      <div className={classes.sidebar}>
        <div className={classes.userCard}></div>
      </div>
      <div className={classes.chatWindow}>
        <div className={classes.messageDock}></div>

        <form onSubmit={submitHandler}>
          <div className={classes.messageBar}>
            <div className={classes.messageInput}>
              <TextField placeholder="Send message..." ref={handleRef} />
            </div>
            <div className={classes.btnContainer}>
              <button type="submit" className={classes.btnSend}>
                <img
                  src="./btnLogin.png"
                  alt="login button"
                  className={classes.btnImg}
                />
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ChatLayout;
