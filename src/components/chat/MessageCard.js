import classes from "./MessageCard.module.css";

function MessageCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.metadataRow}>{props.handle}</div>
      <div className={classes.message}>{props.msg}</div>
    </div>
  );
}

export default MessageCard;
