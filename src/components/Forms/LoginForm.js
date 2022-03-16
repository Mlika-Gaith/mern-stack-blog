import styles from "./Form.module.css";
import FormButton from "./../Buttons/FormButton";
function Form() {
  return (
    <form action="" className={styles.login_form}>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="example@host.com" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="password" />
      <div className={styles.btn_container}>
        <FormButton btnText={"login"} spanText={"register now"} />
      </div>
    </form>
  );
}
export default Form;
