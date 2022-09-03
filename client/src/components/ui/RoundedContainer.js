import classes from "./RoundedContainer.module.css";

function RoundedContainer(props) {
  return <div className={classes.container}>{props.children}</div>;
}

export default RoundedContainer;
