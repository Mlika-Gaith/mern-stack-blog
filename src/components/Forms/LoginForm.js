import "./Form.css";
import FormButton from "./../Buttons/FormButton";
function Form() {
  return (
    <form action="">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="example@host.com" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="password" />
      <div className="btn-container">
        <FormButton btnText={"login"} spanText={"register now"} />
      </div>
    </form>
  );
}
export default Form;
