import styles from "./SingleComment.module.css";
import { Context } from "./../../context/Context";
import { useContext } from "react";
import img from "../../images/avatar.png";
import axios from "axios";
export default function Comment(props) {
  const { user } = useContext(Context);
  const PF = "http://localhost:8081/images/";
  const handleDelete = async () => {
    const verify = window.confirm(
      "Are you sure you want to delete this comment ?"
    );
    if (verify) {
      try {
        await axios.delete(
          "http://localhost:8081/comments/delete/" + props.comment._id,
          { data: { username: user.username } }
        );
        window.alert("Comment deleted !");
        window.location.reload(false);
      } catch (error) {
        console.log(error);
      }
    }
  };
  return (
    <div className={styles.comment_container}>
      <div className={styles.img_container}>
        {props.comment.profilPicture ? (
          <img src={PF + props.comment.profilPicture} alt="user pic" />
        ) : (
          <img src={img} alt="user pic" />
        )}
      </div>
      <div className={styles.comment}>
        <div className={styles.comment_header}>
          <p>{props.comment.username}</p>
          <p>{new Date(props.comment.createdAt).toDateString()}</p>
        </div>
        <div className={styles.comment_text}>
          <p>{props.comment.comment}</p>
        </div>
        {props.comment.username === user.username && (
          <div className={styles.deleteComment}>
            <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
          </div>
        )}
      </div>
    </div>
  );
}
