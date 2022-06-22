import styles from "./Register.module.css";
import RegisterForm from "../../components/Forms/RegisterForm";

function Register() {
  return (
    <div className={styles.container}>
      <div className={styles.registerForm}>
        <div className={styles.registerText}>
          <span>
            Join our community now : <br />
            &#10003; explore our full collections of blog posts.
            <br /> &#10003; write, edit and your posts. <br />
            &#10003; share your posts with others. <br />
            &#10003; share your thoughts with others.
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
