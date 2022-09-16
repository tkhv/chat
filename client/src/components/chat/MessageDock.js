import classes from "./MessageDock.module.css";
import MessageCard from "./MessageCard";

function MessageDock(props) {
  return (
    <div className={classes.messageDock}>
      {props.messages.map((message) => (
        <MessageCard
          handle={message.username}
          msg={message.content}
          key={message._id}
          time={message.time}
          msgDeleteHandler={props.msgDeleteHandler}
        />
      ))}
    </div>
  );
}

export default MessageDock;
