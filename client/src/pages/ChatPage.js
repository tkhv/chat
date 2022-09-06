import { useContext, useState, useEffect } from "react";

import ChatLayout from "../components/chat/ChatLayout";
import AuthContext from "../context/auth-context";

function ChatPage() {
  const [messages, updateMessages] = useState([]);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    loadMessages();
  }, []);

  const loadMessages = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/chat/", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let response = await res.json();
      console.log(response.messageList);
      updateMessages(response.messageList);
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  const authCtx = useContext(AuthContext);
  const sendHandler = async (pendingMessage) => {
    if (authCtx.isLoggedIn) {
      try {
        const res = await fetch("http://localhost:3001/api/chat/", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            userID: authCtx.handle,
            content: pendingMessage,
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

  // OG:
  // pendingMessage.handle = authCtx.handle;
  //         pendingMessage.key = Date.now();
  //         updateMessages((messages) => {
  //           return [pendingMessage, ...messages];
  //         });

  // const loginHandler = async (input) => {
  //   try {
  //     const res = await fetch("http://localhost:3001/api/login/", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         username: input.handle,
  //         password: input.password,
  //       }),
  //     });
  //     console.log(await res.json());
  //   } catch (err) {
  //     console.log(err);
  //   }

  //   authCtx.isLoggedIn = true;
  //   authCtx.handle = input.handle;
  //   console.log(authCtx);
  //   navigate("/chatview");
  // };

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
    />
  );
}

export default ChatPage;
