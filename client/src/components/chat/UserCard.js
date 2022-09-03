import BtnMeatball from "../ui/BtnMeatball";
import classes from "./UserCard.module.css";

function UserCard(props) {
  return (
    <div className={classes.userCard}>
      <div className={classes.handle}>{props.handle}</div>
      <div className={classes.btn}>
        <BtnMeatball onClick={props.onClickUserMenu} />
      </div>
    </div>
  );
}

export default UserCard;
