import classes from "./BtnSend.module.css";

function Card(props) {
  return (
    <div className={classes.flex}>
      <button type={props.type}>{props.text}</button>
    </div>
  );
}

export default Card;
