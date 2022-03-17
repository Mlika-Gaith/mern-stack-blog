import styles from "./Register.module.css";
import RegisterForm from "../../components/Forms/RegisterForm";
import img from "../../images/register.png";
function Register() {
  return (
    <div className={styles.container}>
      <h3>Join us now</h3>
      <div className={styles.registerForm}>
        <img src={img} className={styles.register_img} alt="" />
        <div className={styles.formContainer}>
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
export default Register;
