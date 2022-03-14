import styles from "./Register.module.css";
import RegisterForm from "../../components/Forms/RegisterForm";
function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.registerForm}>
        <div className={styles.imgContainer}>
          <h2>Poly Blog</h2>
          <h3>Join us now</h3>
        </div>
        <div className={styles.formContainer}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
export default Register;
