import Form from "../../components/Forms/LoginForm";
import styles from "./Login.module.css";
function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.text_container}>
        <h3>Welcome</h3>
        <span>login to your account and start browsing now. </span>
      </div>
      <div className={styles.form_container}>
        <Form />
      </div>
    </div>
  );
}
export default Login;
