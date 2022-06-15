import styles from "./SingleComment.module.css";
import img from "../../images/avatar.png";
export default function Comment() {
  return (
    <div className={styles.comment_container}>
      <div className={styles.img_container}>
        <img src={img} alt="avatar" />
      </div>
      <div className={styles.comment}>
        <div className={styles.comment_header}>
          <p>username</p>
          <p>18th september, 2021</p>
        </div>
        <div className={styles.comment_text}>
          <p>
            this is awesoome text baby hello hello hello hello
            hdhdjhdjhjdhjdjdjjdhjdhjdhjdhjhdjdhj
          </p>
        </div>
      </div>
    </div>
  );
}
