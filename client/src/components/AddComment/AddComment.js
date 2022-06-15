import styles from "./AddComment.module.css";
import img from "../../images/avatar.png";
export default function AddComment() {
  return (
    <div className={styles.container}>
      <div className={styles.info}>
        <img src={img} alt="avatar" />
        <p>username</p>
      </div>
      <div className={styles.comment_form}>
        <textarea placeholder="Share your thoughts ..."></textarea>
        <button>Comment</button>
      </div>
    </div>
  );
}
