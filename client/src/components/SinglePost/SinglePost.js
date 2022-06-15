import "./SinglePost.css";
import postImg from "../../images/post1.png";
import { useContext, useState } from "react";
import { Context } from "./../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Categories from "../Categories/Categories";
import AddComment from "../AddComment/AddComment";
import Comment from "../Comment/SingleComment";
function SinglePost(props) {
  const { user } = useContext(Context);
  const navigate = useNavigate();
  const [update, setUpdate] = useState(true);
  const [categories, setCategories] = useState([]);
  const [title, setTitle] = useState(props.post.title);
  const [description, setDescription] = useState(props.post.description);
  const PF = "http://localhost:8081/images/";

  const handleTuggle = () => {
    setUpdate(!update);
    setTitle(props.post.title);
    setDescription(props.post.description);
  };

  const handleDelete = async () => {
    const verify = window.confirm("Are you sure you want to delete post ?");
    if (verify) {
      try {
        await axios.delete(
          "http://localhost:8081/posts/delete/" + props.post._id,
          { data: { username: user.username } }
        );
        navigate("/");
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleCategories = (cats) => {
    setCategories(cats);
  };
  const handleUpdate = async () => {
    try {
      await axios.put("http://localhost:8081/posts/post/" + props.post._id, {
        username: user.username,
        title,
        description,
        categories,
      });
      window.location.reload();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostImg">
          {props.post.postPicture ? (
            <img src={PF + props.post.postPicture} alt="post pic" />
          ) : (
            <img src={postImg} alt="post pic" />
          )}
        </div>
        <div className="singlePostHeader">
          {update ? (
            <div className="singlePostTitle">
              <p>{props.post.title}</p>
            </div>
          ) : (
            <div className="singlePostTitle">
              <input
                type="text"
                name="titleInput"
                value={title}
                className="singlePostTitleInput"
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
          )}

          {props.post.username === user.username && (
            <div className="singlePostEdit">
              {update ? (
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={handleTuggle}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-pen-to-square"
                  onClick={() => setUpdate(!update)}
                  style={{ color: "#e63946" }}
                ></i>
              )}

              <i className="fa-solid fa-trash-can" onClick={handleDelete}></i>
            </div>
          )}
        </div>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            author : {props.post.username}
          </span>
          <span className="singlePostDate">
            {new Date(props.post.createdAt).toDateString()}
          </span>
        </div>
        {update ? (
          <p className="singlePostDescription">{props.post.description}</p>
        ) : (
          <textarea
            value={description}
            name="postDescription"
            className="singlePostDescriptionInput"
            onChange={(e) => setDescription(e.target.value)}
          ></textarea>
        )}
        <div className="singlePostCategories">
          <p>categories :</p>
          {update ? (
            props.post.categories ? (
              props.post.categories.map((category, i) => (
                <div className="singlePostCategory" key={i}>
                  {category}
                </div>
              ))
            ) : (
              <div className="singlePostCategory">None</div>
            )
          ) : (
            <Categories categories={handleCategories} />
          )}
        </div>
        {!update && (
          <div className="submitArea">
            <button className="submitBtn" onClick={handleUpdate}>
              Save
            </button>
          </div>
        )}
        <div className="comments">
          <p>Comments :</p>
          <AddComment />
          <p>other comments :</p>
          <Comment />
        </div>
      </div>
    </div>
  );
}
export default SinglePost;
