import "./Header.css";
import img from "../../images/header.png";
function Header() {
  return (
    <div className="header">
      <img src={img} alt="" />
      <div className="headerTitles">
        <span className="headerTitlelg">PolyClubs</span>
        <span className="headerTitleSm">Personal Students Blog</span>
      </div>
    </div>
  );
}
export default Header;
