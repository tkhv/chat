import classes from "./BtnMeatball.module.css";

function BtnMeatball(props) {
  return (
    <div className={classes.btnContainer}>
      <button
        type="submit"
        className={classes.btnLogin}
        onClick={props.onClick}
      >
        <img
          src="./btnMeatball.png"
          alt="options button"
          className={classes.btnImg}
        />
      </button>
    </div>
  );
}

export default BtnMeatball;
