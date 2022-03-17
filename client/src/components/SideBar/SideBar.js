import "./SideBar.css";
import personalImg from "../../images/avatar.png";
function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle"> About me</span>
        <img src={personalImg} alt="personal profil pic" />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cupiditate
          inventore sunt recusandae reprehenderit sint illo corrupti veritatis.
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle"> Categories</span>
        <ul className="sideBarList">
          <li className="sideBarListItem">Tech</li>
          <li className="sideBarListItem">Sports</li>
          <li className="sideBarListItem">Culture</li>
          <li className="sideBarListItem">Student Life</li>
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle"> follow us</span>
        <div className="sideBarSocial">
          <i class="fa-brands fa-github"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-facebook"></i>
          <i class="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
