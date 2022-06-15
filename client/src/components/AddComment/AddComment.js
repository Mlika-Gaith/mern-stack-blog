import styles from "./AddComment.module.css";
import img from "../../images/avatar.png";
import { useState } from "react";
import axios from "axios";
export default function AddComment(props) {
  const [comment, setComment] = useState("");
  const PF = "http://localhost:8081/images/";
  const handleComment = async (e) => {
    e.preventDefault();
    if (comment.length != 0) {
      try {
        await axios.post("http://localhost:8081/comments/comment", {
          username: props.user.username,
          post_id: props.post,
          comment,
          profilPicture: props.user.profilPicture,
        });
        window.alert("comment added successfully.");
      } catch (err) {
        console.log(err);
      }
    } else {
      window.alert("you can't add empty comments !");
    }
  };

  return (
    <form className={styles.container} onSubmit={handleComment}>
      <div className={styles.info}>
        {props.user.profilPicture ? (
          <img src={PF + props.user.profilPicture} alt="profil Pic" />
        ) : (
          <img src={img} alt="profil Pic" />
        )}

        <p>{props.user.username}</p>
      </div>
      <div className={styles.comment_form}>
        <textarea
          placeholder="Share your thoughts ..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        ></textarea>
        <button type="submit">Comment</button>
      </div>
    </form>
  );
}
