import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import classes from "./Sidebar.module.css";
import UserCard from "./UserCard";
import AuthContext from "../../context/auth-context.js";

function Sidebar() {
  const navigate = useNavigate();
  const authCtx = useContext(AuthContext);
  return (
    <div className={classes.sidebar}>
      <UserCard
        handle={"Logged in as: " + authCtx.handle}
        onClickUserMenu={() => {
          authCtx.logoutHandler();
          navigate("/");
        }}
      />
    </div>
  );
}

export default Sidebar;
