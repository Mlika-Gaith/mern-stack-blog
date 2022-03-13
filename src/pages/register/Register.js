import "./Register.css";
import RegisterForm from "../../components/Forms/RegisterForm";
function Register() {
  return (
    <div className="container">
      <div className="registerForm">
        <div className="imgContainer">
          <h2>Poly Blog</h2>
          <h3>Join us now</h3>
        </div>
        <div className="formContainer">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
}
export default Register;
