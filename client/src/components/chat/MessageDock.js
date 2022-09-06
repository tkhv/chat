import classes from "./MessageDock.module.css";
import MessageCard from "./MessageCard";

function MessageDock(props) {
  return (
    <div className={classes.messageDock}>
      {props.messages.map((message) => (
        <MessageCard
          handle={message._id}
          msg={message.content}
          key={Date.now()}
          time={message.id}
          msgDeleteHandler={props.msgDeleteHandler}
        />
      ))}
    </div>
  );
}

export default MessageDock;
