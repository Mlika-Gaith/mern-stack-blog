import styles from "./Form.module.css";
function Form() {
  return (
    <form action="" className={styles.form}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="example@host.com" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="password" />
      <button>Sign in</button>
      <div className={styles.link_container}>
        <span>register</span>
      </div>
    </form>
  );
}
export default Form;
