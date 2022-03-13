import "./Form.css";
import FormButton from "./../Buttons/FormButton";
function Form() {
  return (
    <form action="">
      <label htmlFor="email">Email</label>
      <input type="email" id="email" placeholder="example@host.com" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="password" />
      <FormButton btnText={"login"} spanText={"register now"} />
    </form>
  );
}
export default Form;
