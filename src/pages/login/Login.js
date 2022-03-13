import Form from "../../components/Forms/LoginForm";
import "./Login.css";
function Login() {
  return (
    <div className="container">
      <div className="loginForm">
        <div className="imgContainer">
          <h2>Poly Blog</h2>
          <h3>Personal students blog</h3>
        </div>
        <div className="formContainer">
          <Form />
        </div>
      </div>
    </div>
  );
}
export default Login;
