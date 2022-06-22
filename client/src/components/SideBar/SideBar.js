import "./SideBar.css";
import personalImg from "../../images/register.png";
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
        <span className="sideBarTitle">Source Code</span>
        <div className="sideBarSocial">
          <a
            href="https://github.com/Mlika-Gaith/mern-stack-blog"
            target="_blank"
          >
            see repo
          </a>
        </div>
      </div>
    </div>
  );
}
export default SideBar;
