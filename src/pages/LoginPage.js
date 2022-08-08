import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/auth-context";
import LoginModal from "../components/LoginModal";

function LoginPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  function loginHandler(input) {
    // HTTP check login, then:
    authCtx.isLoggedIn = true;
    authCtx.handle = input.handle;
    console.log(authCtx);
    navigate("/chat");
  }

  return <LoginModal loginHandler={loginHandler} />;
}

export default LoginPage;
