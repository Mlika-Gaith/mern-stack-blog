import styles from "./nomatch.module.css";
import img from "../../images/nomatch.png";
function NoMatch() {
  return (
    <div className={styles.nomatch}>
      <img src={img} alt="" />
      <div className={styles.text_container}>
        <span className={styles.titleLg}>Oops !!!</span>
        <span className={styles.titleSm}>No content here !</span>
      </div>
    </div>
  );
}
export default NoMatch;
