import React from "react";

const AuthContext = React.createContext({
  isLoggedIn: false,
  handle: null,
  userID: null,
  logoutHandler: function () {
    if (this.isLoggedIn) {
      this.isLoggedIn = false;
      this.handle = null;
      this.userID = null;
    }
  },
});

export default AuthContext;
