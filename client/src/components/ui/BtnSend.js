import classes from "./BtnSend.module.css";

function BtnSend(props) {
  let clickable;
  if (!props.disabled) {
    clickable = {
      cursor: "pointer",
    };
  }

  return (
    <div className={classes.btnContainer}>
      <button
        type="submit"
        className={classes.btnLogin}
        disabled={props.disabled}
        style={clickable}
      >
        <img
          src="./btnLogin.png"
          alt="login button"
          className={classes.btnImg}
        />
      </button>
    </div>
  );
}

export default BtnSend;
