import styles from "./Button.module.css";
function FormButton(props) {
  return (
    <div className={styles.loginBtn}>
      <button>{props.btnText}</button>
      <span>{props.spanText}</span>
    </div>
  );
}
export default FormButton;
