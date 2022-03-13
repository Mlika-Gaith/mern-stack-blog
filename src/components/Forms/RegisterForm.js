import "./Form.css";
import FormButton from "./../Buttons/FormButton";
function Form() {
  return (
    <form action="">
      <div className="names">
        <div className="name">
          <label htmlFor="firstName">First Name</label>
          <input type="text" id="firstName" placeholder="first name" />
        </div>
        <div className="name">
          <label htmlFor="lastName">last Name</label>
          <input type="text" id="lastName" placeholder="last name" />
        </div>
      </div>
      <label htmlFor="email">email</label>
      <input type="email" id="email" placeholder="example@host.com" />
      <label htmlFor="password">password</label>
      <input type="password" placeholder="password" id="password" />
      <label htmlFor="password2">confirm password</label>
      <input type="password" placeholder="confirm password" id="password2" />
      <FormButton btnText={"register"} spanText={"or login"} />
    </form>
  );
}
export default Form;
