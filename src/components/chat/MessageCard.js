import classes from "./MessageCard.module.css";

function MessageCard(props) {
  return (
    <div className={classes.container}>
      <div className={classes.metadataRow}>{props.title}</div>
      <div className={classes.message}>{props.message}</div>
    </div>
  );
}

export default MessageCard;
