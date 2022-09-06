import { useContext, useState } from "react";
import classes from "./MessageDock.module.css";
import MessageCard from "./MessageCard";
import AuthContext from "../../context/auth-context";

function MessageDock(props) {
  const [messages, updateMessages] = useState(props.loadMessages());

  const authCtx = useContext(AuthContext);
  function sendHandler(pendingMessage) {
    if (authCtx.isLoggedIn) {
      pendingMessage.handle = authCtx.handle;
      pendingMessage.key = Date.now();
      updateMessages((messages) => {
        return [pendingMessage, ...messages];
      });
    }
  }
  console.log(props.messages);
  function msgDeleteHandler(messageId) {
    // TODO: Fix message deletion
    console.log(messages);
    if (authCtx.isLoggedIn) {
      console.log(messageId);
      const messageIndex = messages.findIndex(
        (message) => message.time === messageId
      );
      updateMessages((messages) => {
        return messages.splice(messageIndex, 1);
      });
    }
    console.log(messages);
  }

  return (
    <div className={classes.messageDock}>
      {props.messages.map((message) => (
        <MessageCard
          handle={message._id}
          msg={message.content}
          key={Date.now()}
          time={message.id}
          msgDeleteHandler={msgDeleteHandler}
        />
      ))}
    </div>
  );
}

export default MessageDock;
