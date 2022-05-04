import styles from "./Register.module.css";
import RegisterForm from "../../components/Forms/RegisterForm";

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.registerForm}>
        <div className={styles.registerText}>
          <span>
            Join our community now and starting sharing posts about your
            favorite Polytechnique clubs.
          </span>
        </div>
        <div className={styles.formContainer}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
export default Register;
