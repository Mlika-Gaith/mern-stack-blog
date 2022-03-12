import "./Post.css";
import postImg from "../../images/post1.png";
function Post() {
  return (
    <div className="post">
      <h4>Poly python developpers club</h4>
      <img src={postImg} alt="" />
      <p className="postDate">12th DEcember, 2018;</p>
      <p className="postDescription">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis vel,
        nobis quos repellat id voluptates ea reprehenderit hic adipisci dolorum
        iure facilis ducimus ab ipsam dignissimos ipsum, pariatur dolores?Lorem
        ipsum dolor sit, amet consectetur adipisicing elit. Voluptates tempore
        fuga omnis iure! Esse alias nisi qui ipsum fuga corporis odit
        voluptatum, placeat maxime, sed necessitatibus vitae, suscipit
        reprehenderit earum! Soluta?
      </p>
      <div className="postCategories">
        <div className="postCategory">student life</div>
        <div className="postCategory">student life</div>
        <div className="postCategory">student life</div>
        <div className="postCategory">student life</div>
      </div>
      <div className="readmore">
        <button>read more</button>
      </div>
    </div>
  );
}
export default Post;
