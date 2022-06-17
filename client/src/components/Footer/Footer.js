import styles from "./Footer.module.css";
import logo from "../../images/logo.png";
import { Link, NavLink } from "react-router-dom";
function Footer() {
  return (
    <div className={styles.footer_container}>
      <div className={styles.logo}>
        <h4>Website</h4>
        <div className={styles.logo_section}>
          <img src={logo} alt="website logo" />
          <div className={styles.logo_titles}>
            <p className={styles.main_title}>PolyClubs</p>
            <p className={styles.sub_title}>For students</p>
          </div>
        </div>
      </div>
      <div className={styles.small_about}>
        <h4>About</h4>
        <p>Designed by ghaith mlika &copy; 2021/2022 </p>
        <NavLink
          to="/about"
          style={{ textDecoration: "none", color: "inherit" }}
        >
          <p>See Full about page</p>
        </NavLink>
      </div>
      <div className={styles.social_links}>
        <h4>Social Links</h4>
        <div className={styles.links}>
          <a
            className={styles.social_link}
            href="https://github.com/Mlika-Gaith"
            target="blank"
          >
            <i className="fa-brands fa-github-alt"></i>
          </a>
          <a
            className={styles.social_link}
            href="https://www.linkedin.com/in/ghaith-mlika-305797214/"
            target="blank"
          >
            <i class="fa-brands fa-linkedin-in"></i>
          </a>
          <a
            className={styles.social_link}
            href="https://www.pinterest.com/gaithmlika"
            target="blank"
          >
            <i class="fa-brands fa-pinterest-p"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Footer;
