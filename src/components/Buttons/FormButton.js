import "./Button.css";
function FormButton(props) {
  return (
    <div className="loginBtn">
      <button>{props.btnText}</button>
      <span>{props.spanText}</span>
    </div>
  );
}
export default FormButton;
