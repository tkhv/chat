import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
// import openSocket from "socket.io-client";

import AuthContext from "../context/auth-context";
import LoginModal from "../components/LoginModal";

function LoginPage() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);

  if (!authCtx.isLoggedIn) navigate("/");

  const [loginMode, setLoginMode] = useState(true);

  const label = loginMode ? "Enter your handle: " : "Sign up: ";

  function submitHandler(input) {
    loginMode ? loginHandler(input) : signupHandler(input);
  }

  const loginHandler = async (input) => {
    try {
      const res = await fetch("http://localhost:3001/api/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: input.handle,
          password: input.password,
        }),
      });
      console.log(await res.json());
    } catch (err) {
      console.log(err);
    }

    authCtx.isLoggedIn = true;
    authCtx.handle = input.handle;
    console.log(authCtx);
    navigate("/chatview");
  };

  const signupHandler = async (input) => {
    try {
      const res = await fetch("http://192.168.1.16:8080/login/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: input.handle,
          password: input.password,
        }),
      });
      console.log(await res.json());
    } catch (err) {
      console.log(err);
    }
    authCtx.isLoggedIn = true;
    authCtx.handle = input.handle;
    console.log(authCtx);
    setLoginMode(true);
  };

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
      <LoginModal submitHandler={submitHandler} label={label} />
    </div>
  );
}

export default LoginPage;
