import { useContext, useState, useEffect } from "react";

import ChatLayout from "../components/chat/ChatLayout";
import AuthContext from "../context/auth-context";

function ChatPage() {
  const authCtx = useContext(AuthContext);
  const [messages, updateMessages] = useState([]);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    loadContacts();
  }, []);

  const loadContacts = async () => {
    setLoading(false);
  };

  const sendHandler = async (pendingMessage) => {
    if (authCtx.isLoggedIn) {
      try {
        const res = await fetch("http://localhost:3001/api/chat/sendMsg", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dmID: authCtx.activeDM,
            content: pendingMessage,
            username: authCtx.handle,
          }),
        });
        let response = await res.json();
        console.log(response);
        updateMessages((messages) => {
          return [response, ...messages];
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  const msgUpdateHandler = async (messages) => {
    if (messages) {
      updateMessages(messages.reverse());
    } else {
      updateMessages([]);
    }
  };

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

  if (isLoading) {
    return <div></div>;
  }

  return (
    <ChatLayout
      sendHandler={sendHandler}
      msgDeleteHandler={msgDeleteHandler}
      messages={messages}
      msgUpdateHandler={msgUpdateHandler}
    />
  );
}

export default ChatPage;
