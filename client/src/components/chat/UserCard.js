import BtnMeatball from "../ui/BtnMeatball";
import classes from "./UserCard.module.css";

function UserCard(props) {
  function onClick(event) {
    event.preventDefault();
    props.getMsgsHandler(props.dmID);
  }

  return (
    <div className={classes.userCard}>
      <div className={classes.handle}>{props.handle}</div>
      <div className={classes.btn}>
        <BtnMeatball onClick={onClick} />
      </div>
    </div>
  );
}

export default UserCard;
