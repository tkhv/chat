import { useContext } from "react";

import BtnMeatball from "../ui/BtnMeatball";
import classes from "./MessageCard.module.css";
import AuthContext from "../../context/auth-context";

function MessageCard(props) {
  const time = new Date(props.time);
  const authCtx = useContext(AuthContext);
  function msgDeleteHandler() {
    props.msgDeleteHandler(props.time);
  }

  let color = ["#0a80fe", "white"];
  if (props.handle !== authCtx.handle) {
    color = ["#e8e8ea", "black"];
  }

  return (
    <div className={classes.container} style={{ backgroundColor: color[0] }}>
      <div className={classes.metadataRow} style={{ color: color[1] }}>
        <div>{props.handle}</div>{" "}
        <div className={classes.timestamp} style={{ color: color[1] }}>
          {time.toLocaleString()}
        </div>
        <div className={classes.msgOptions}>
          <BtnMeatball onClick={msgDeleteHandler} />
        </div>
      </div>
      <div className={classes.message} style={{ color: color[1] }}>
        {props.msg}
      </div>
    </div>
  );
}

export default MessageCard;
