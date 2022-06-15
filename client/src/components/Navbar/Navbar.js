import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { Context } from "./../../context/Context";
import index from "../../images/index.png";
function NavBar() {
  const { user, dispatch } = useContext(Context);
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };

  return (
    <div className={styles.top}>
      <div className={styles.topLeft}>
        <img src={index} alt="logo" />
      </div>
      <div className={styles.topCenter}>
        <ul className={styles.topList}>
          <li className={styles.topListItem}>
            <NavLink to="/" className={styles.nav_link}>
              Home
            </NavLink>
          </li>
          <li className={styles.topListItem}>
            <NavLink to="/about" className={styles.nav_link}>
              About
            </NavLink>
          </li>
          {user ? (
            <li className={styles.topListItem}>
              <NavLink to="/write" className={styles.nav_link}>
                Write
              </NavLink>
            </li>
          ) : (
            <li className={styles.topListItem}>
              <NavLink to="/login" className={styles.nav_link}>
                Write
              </NavLink>
            </li>
          )}

          {user ? (
            <li className={styles.topListItem} onClick={handleLogout}>
              Logout
            </li>
          ) : (
            <NavLink to="/register" className={styles.nav_link}>
              <li className={styles.topListItem}>Register</li>
            </NavLink>
          )}
        </ul>
      </div>
      <div className={styles.topRight}>
        {user ? (
          <NavLink to="/settings" className={styles.nav_link}>
            <ul className={styles.topList}>
              <li className={styles.topListItem}>My Account</li>
            </ul>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <button className={styles.login_btn}>Login</button>
          </NavLink>
        )}
      </div>
    </div>
  );
}
export default NavBar;
