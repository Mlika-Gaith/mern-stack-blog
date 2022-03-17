import img from "../../images/avatar.png";
import styles from "./UpdateAccount.module.css";
function UpdateAccount() {
  return (
    <div className={styles.infoContainer}>
      <h2>Edit your Account</h2>
      <div className={styles.profilImgContainer}>
        <img src={img} alt="" />
        <input type="file" id="imgUpload" />
        <label htmlFor="imgUpload">
          change profil image : <i className="fa-solid fa-images"></i>
        </label>
      </div>
      <form action="" className={styles.accountInfo}>
        <div className={styles.name_email}>
          <h2>Account Inforamtion</h2>

          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="first name " />

          <label htmlFor="lastName">Last Name</label>
          <input type="text" id="lastName" placeholder="last name " />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="example@host.com" />
        </div>
        <div className={styles.password}>
          <h2>Change Password</h2>

          <label htmlFor="password">Password</label>
          <input type="password" id="password1" placeholder="password" />

          <label htmlFor="password2">Confrim Password</label>
          <input
            type="password"
            id="password2"
            placeholder="confirm password"
          />
          <button>save changes</button>
        </div>
      </form>
    </div>
  );
}
export default UpdateAccount;
