import "./SideBar.css";
import personalImg from "../../images/profile.jpg";
function SideBar() {
  return (
    <div className="sideBar">
      <div className="sideBarItem">
        <span className="sideBarTitle"> About me</span>
        <img src={personalImg} alt="personal profil pic" />
        <p>
          Hi there my name is Ghaith Mlika and nice to meet you. This my first
          MERN stack project and i hope you enjoy it. Feel Free to visit My
          github Profil below and take a look at the source code. Thank You :)
        </p>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle"> follow me</span>
        <div className="sideBarSocial">
          <i className="fa-brands fa-github"></i>
          <i className="fa-brands fa-linkedin"></i>
          <i className="fa-brands fa-facebook"></i>
          <i className="fa-brands fa-youtube"></i>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
