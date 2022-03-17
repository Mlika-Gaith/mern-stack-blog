import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";
function NavBar() {
  let user = false;
  return (
    <div className={styles.top}>
      <div className={styles.topLeft}>
        <i className="fa-brands fa-github"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-facebook"></i>
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
            <li className={styles.topListItem}>Logout</li>
          ) : (
            <NavLink to="/register" className={styles.nav_link}>
              <li className={styles.topListItem}>Register</li>
            </NavLink>
          )}
        </ul>
      </div>
      <div className={styles.topRight}>
        {user ? (
          <NavLink to="/settings">
            <i className="fa-solid fa-user-gear"></i>
          </NavLink>
        ) : (
          <NavLink to="/login">
            <button className={styles.login_btn}>Login</button>
          </NavLink>
        )}
        <i className="fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
export default NavBar;
