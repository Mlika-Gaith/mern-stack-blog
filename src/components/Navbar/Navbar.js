import "./NavBar.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  let user = false;
  return (
    <div className="top">
      <div className="topLeft">
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-facebook"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="topListItem">About</li>
          {user ? (
            <li className="topListItem">
              <NavLink to="/write">Write</NavLink>
            </li>
          ) : (
            <li className="topListItem">
              <NavLink to="/login">Write</NavLink>
            </li>
          )}

          {user ? (
            <li className="topListItem">Logout</li>
          ) : (
            <NavLink to="/register">
              <li className="topListItem">Register</li>
            </NavLink>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <NavLink to="/settings">
            <i className="fa-solid fa-user-gear"></i>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <button className="login_btn">Login</button>
          </NavLink>
        )}
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
export default NavBar;
