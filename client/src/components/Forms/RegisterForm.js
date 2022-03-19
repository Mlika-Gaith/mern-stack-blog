import styles from "./Form.module.css";
function Form() {
  return (
    <form action="" className={styles.form}>
      <label htmlFor="firstName">First Name</label>
      <input type="text" id="firstName" placeholder="first name" />

      <label htmlFor="lastName">last Name</label>
      <input type="text" id="lastName" placeholder="last name" />

      <label htmlFor="email">email</label>
      <input type="email" id="email" placeholder="example@host.com" />
      <label htmlFor="password">password</label>
      <input type="password" placeholder="password" id="password" />
      <label htmlFor="password2">confirm password</label>
      <input type="password" placeholder="confirm password" id="password2" />
      <button className={styles.register}>Sign up</button>
      <div className={styles.link_container}>
        <span>sign in</span>
      </div>
    </form>
  );
}
export default Form;