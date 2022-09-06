import { useEffect, useState } from "react";

import ChatLayout from "../components/chat/ChatLayout";

function ChatPage() {
  useEffect(() => {
    loadMsgs();
  });

  const [messages, updateMessages] = useState([]);

  const loadMsgs = async () => {
    try {
      const res = await fetch("http://localhost:3001/api/chat", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      let response = await res.json();
      console.log(response.messageList);
      updateMessages(() => {
        return response.messageList;
      });
    } catch (err) {
      console.log(err);
    }
  };

  return <ChatLayout messages={messages} />;
}

export default ChatPage;
