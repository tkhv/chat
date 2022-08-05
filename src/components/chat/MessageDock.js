import classes from "./MessageDock.module.css";
import MessageCard from "./MessageCard";

function MessageDock(props) {
  return (
    <div className={classes.messageDock}>
      {props.messages.map((message) => (
        <MessageCard handle={message.handle} msg={message.msg} />
      ))}
    </div>
  );
}

export default MessageDock;
