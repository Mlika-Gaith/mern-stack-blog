import Form from "../../components/Forms/LoginForm";
import styles from "./Login.module.css";
function Login() {
  return (
    <div className={styles.container}>
      <div className={styles.loginForm}>
        <div className={styles.imgContainer}>
          <h2>Poly Blog</h2>
          <h3>Personal students blog</h3>
        </div>
        <div className={styles.formContainer}>
          <Form />
        </div>
      </div>
    </div>
  );
}
export default Login;
