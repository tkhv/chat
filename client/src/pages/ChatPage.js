import { useContext, useState } from "react";

import ChatLayout from "../components/chat/ChatLayout";
import AuthContext from "../context/auth-context";

function ChatPage() {
  const [messages, updateMessages] = useState([]);

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
    <ChatLayout
      sendHandler={sendHandler}
      msgDeleteHandler={msgDeleteHandler}
      messages={messages}
    />
  );
}

export default ChatPage;
