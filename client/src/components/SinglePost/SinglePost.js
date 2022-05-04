import "./SinglePost.css";
import postImg from "../../images/post1.png";
function SinglePost(props) {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostImg">
          {props.post.postPicture ? (
            <img src={props.post.postPicture} alt="post pic" />
          ) : (
            <img src={postImg} alt="post pic" />
          )}
        </div>
        <div className="singlePostHeader">
          <div className="singlePostTitle">
            <p>{props.post.title}</p>
          </div>
          <div className="singlePostEdit">
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            author : {props.post.username}
          </span>
          <span className="singlePostDate">
            {new Date(props.post.createdAt).toDateString()}
          </span>
        </div>
        <p className="singlePostDescription">{props.post.description}</p>
        <div className="singlePostCategories">
          <p>categories :</p>
          {props.post.categories ? (
            props.post.categories.map((category, i) => (
              <div className="singlePostCategory" key={i}>
                {category.title}
              </div>
            ))
          ) : (
            <div className="singlePostCategory">None</div>
          )}
        </div>
      </div>
    </div>
  );
}
export default SinglePost;
