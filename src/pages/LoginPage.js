import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

import AuthContext from "../context/auth-context";
import LoginModal from "../components/LoginModal";

function LoginPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  const [loginMode, setLoginMode] = useState(true);

  function loginHandler(input) {
    // HTTP check login, then:
    authCtx.isLoggedIn = true;
    authCtx.handle = input.handle;
    console.log(authCtx);
    navigate("/chat");
  }

  function signupHandler(input) {
    // HTTP check login, then:
    authCtx.isLoggedIn = true;
    authCtx.handle = input.handle;
    console.log(authCtx);
    console.log("SIGNUP");
    setLoginMode(true);
  }

  const switchModeHandler = () => {
    setLoginMode((loginMode) => !loginMode);
  };

  return (
    <div>
      {loginMode && (
        <div>
          <button onClick={switchModeHandler}>Sign Up</button>
        </div>
      )}
      <LoginModal
        loginHandler={loginHandler}
        signupHandler={signupHandler}
        login={loginMode}
      />
    </div>
  );
}

export default LoginPage;
