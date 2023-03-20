import { Users } from "../DummyData";
import Online from "./Online";

export default function Rightbar() {
  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/5.png" alt="" />
          <span className="birthdayaText">
            <b>Supun Rajaguru</b> & <b>3 other friends</b> have a birthdaya
            today.Wish them.
          </span>
        </div>
        <img className="rightbarAd" src="/assets/6.jpeg" alt="" />
        <h4 className="rightbarTitle">OnlionFriends</h4>
        <ul className="rightbarFriendList">
          {Users.map((u) => (
            <Online key={u.id} user={u} />
          ))}
        </ul>
      </div>
    </div>
  );
}
