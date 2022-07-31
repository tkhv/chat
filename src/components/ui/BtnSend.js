import classes from "./BtnSend.module.css";

function Card(props) {
  return (
    <div className={classes.btnContainer}>
      <button type="submit" className={classes.btnLogin}>
        <img
          src="./btnLogin.png"
          alt="login button"
          className={classes.btnImg}
        />
      </button>
    </div>
  );
}

export default Card;
