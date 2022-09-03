import BtnMeatball from "../ui/BtnMeatball";
import classes from "./MessageCard.module.css";

function MessageCard(props) {
  const time = new Date(props.time);

  function msgDeleteHandler() {
    props.msgDeleteHandler(props.time);
  }

  return (
    <div className={classes.container}>
      <div className={classes.metadataRow}>
        <div>{props.handle}</div>{" "}
        <div className={classes.timestamp}>{time.toLocaleString()}</div>
        <div className={classes.msgOptions}>
          <BtnMeatball onClick={msgDeleteHandler} />
        </div>
      </div>
      <div className={classes.message}>{props.msg}</div>
    </div>
  );
}

export default MessageCard;
