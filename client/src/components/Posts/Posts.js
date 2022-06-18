import Post from "../Post/Post";
import "./Posts.css";
function Posts(props) {
  return (
    <div className="posts">
      {props.posts.map((p) => (
        <Post post={p} />
      ))}
    </div>
  );
}
export default Posts;
