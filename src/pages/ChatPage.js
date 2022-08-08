import { useContext } from "react";

import ChatLayout from "../components/chat/ChatLayout";
import AuthContext from "../context/auth-context";

function ChatPage() {
  const authCtx = useContext(AuthContext);
  function sendHandler(pendingMessage) {
    if (authCtx.isLoggedIn) {
      pendingMessage.handle = authCtx.handle;
      pendingMessage.key = Date.now();
      return pendingMessage;
    }
  }

  return <ChatLayout sendHandler={sendHandler} />;
}

export default ChatPage;
