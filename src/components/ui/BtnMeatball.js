import classes from "./BtnMeatball.module.css";

function BtnMeatball(props) {
  return (
    <button type="submit" className={classes.btnLogin} onClick={props.onClick}>
      <img
        src="./btnMeatball.png"
        alt="options button"
        className={classes.btnImg}
      />
    </button>
  );
}

export default BtnMeatball;
