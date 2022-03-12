import "./NavBar.css";
import avatar from "../../images/avatar.png";
function NavBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">Home</li>
          <li className="topListItem">About</li>
          <li className="topListItem">Contact</li>
          <li className="topListItem">Write</li>
          <li className="topListItem">Logout</li>
        </ul>
      </div>
      <div className="topRight">
        <img src={avatar} alt="avatar" className="topImage" />
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
export default NavBar;
