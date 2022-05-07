import styles from "./Post.module.css";
import postImg from "../../images/post1.png";
import { Link } from "react-router-dom";
function Post(props) {
  const PF = "http://localhost:8081/images/";
  console.log(PF + props.post.postPicture);
  return (
    <div className={styles.post}>
      <h4>{props.post.title}</h4>
      {props.post.postPicture ? (
        <img src={PF + props.post.postPicture} alt="" />
      ) : (
        <img src={postImg} alt="" />
      )}

      <p className={styles.postDate}>
        Created AT : {new Date(props.post.createdAt).toDateString()}
      </p>
      <p className={styles.postDate}>
        Last Updated AT : {new Date(props.post.updatedAt).toDateString()}
      </p>
      <p className={styles.postDescription}>{props.post.description}</p>
      <div className={styles.postCategories}>
        {props.post.categories.map((category, i) => (
          <div className={styles.postCategory} key={i}>
            {category}
          </div>
        ))}
      </div>
      <div className={styles.readmore}>
        <button>
          <Link
            to={"/post/" + props.post._id}
            style={{ textDecoration: "inherit", color: "inherit" }}
          >
            read more
          </Link>
        </button>
      </div>
    </div>
  );
}
export default Post;
