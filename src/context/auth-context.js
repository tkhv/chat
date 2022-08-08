import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  handle: null,
  userID: null,
});

export default AuthContext;
