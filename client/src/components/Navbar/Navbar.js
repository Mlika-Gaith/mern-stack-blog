import "./NavBar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./../../context/Context";
function NavBar() {
  const { user, dispatch } = useContext(Context);
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/");
  };

  return (
    <div className="top">
      <div className="topLeft">
        <div className="logo">
          <h3>PolyClubs</h3>
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <NavLink to="/" className="nav_link">
              Home
            </NavLink>
          </li>
          <li className="topListItem">
            <NavLink to="/about" className="nav_link">
              About
            </NavLink>
          </li>
          {user ? (
            <li className="topListItem">
              <NavLink to="/write" className="nav_link">
                Write
              </NavLink>
            </li>
          ) : (
            <li className="topListItem">
              <NavLink to="/login" className="nav_link">
                Write
              </NavLink>
            </li>
          )}

          {user ? (
            <li className="topListItem" onClick={handleLogout}>
              Logout
            </li>
          ) : (
            <NavLink to="/register" className="nav_link">
              <li className="topListItem">Register</li>
            </NavLink>
          )}
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <NavLink to="/settings" className="nav_link">
            <ul className="topList">
              <li className="topListItem">My Account</li>
            </ul>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <button className="login_btn">Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default NavBar;
