import "./SideBar.css";
import personalImg from "../../images/avatar.png";
import { useState, useEffect } from "react";
import axios from "axios";
function SideBar() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const getCategories = async () => {
      const response = await axios.get("http://localhost:8081/categories/");
      setCategories(response.data);
    };
    getCategories();
  });
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
          {categories.map((category, i) => (
            <li className="sideBarListItem" key={i}>
              {category.title}
            </li>
          ))}
        </ul>
      </div>
      <div className="sideBarItem">
        <span className="sideBarTitle"> follow us</span>
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
