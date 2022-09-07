import { useContext, useState } from "react";
import MessageBar from "./MessageBar";
import UserCard from "./UserCard";
import AuthContext from "../../context/auth-context.js";

function Contacts(props) {
  const authCtx = useContext(AuthContext);
  const [contacts, updateContacts] = useState(authCtx.contacts);

  const searchHandler = async (searchedUsername) => {
    if (authCtx.isLoggedIn) {
      try {
        const res = await fetch("http://localhost:3001/api/chat/getDms", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            originID: authCtx.userID,
            username: searchedUsername,
          }),
        });
        let response = await res.json();
        updateContacts((contacts) => {
          return [
            { username: searchedUsername, dmID: response.dmID },
            ...contacts,
          ];
        });
        props.msgUpdateHandler(response.messages);
      } catch (err) {
        console.log(err);
      }
    }
  };

  const getMsgsHandler = async (dmID) => {
    if (authCtx.isLoggedIn) {
      try {
        const res = await fetch("http://localhost:3001/api/chat/getMsgs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            dmID: dmID,
          }),
        });
        let response = await res.json();
        authCtx.activeDM = dmID;
        props.msgUpdateHandler(response.messages);
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <MessageBar placeholder="Add user..." sendHandler={searchHandler} />;
      {contacts.map((contact) => (
        <UserCard
          contacts={contacts}
          dmID={contact.dmID}
          handle={contact.username}
          getMsgsHandler={getMsgsHandler}
          key={contact.dmID}
        />
      ))}
    </div>
  );
}

export default Contacts;
