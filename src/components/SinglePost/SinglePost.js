import "./SinglePost.css";
import postImg from "../../images/post1.png";
function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <div className="singlePostImg">
          <img src={postImg} alt="post pic" />
        </div>
        <div className="singlePostHeader">
          <div className="singlePostTitle">
            <p>Poly python developpers club</p>
          </div>
          <div className="singlePostEdit">
            <i className="fa-solid fa-pen-to-square"></i>
            <i className="fa-solid fa-trash-can"></i>
          </div>
        </div>

        <div className="singlePostInfo">
          <span className="singlePostAuthor">author : ghaith mlika</span>
          <span className="singlePostDate">18th December, 2018</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
          mollitia temporibus voluptate, error fugiat ipsam magnam ex animi
          possimus tempora perspiciatis excepturi fuga, pariatur esse quae culpa
          atque reiciendis dolore?Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Eveniet omnis sint, temporibus aliquid repellendus
          veritatis consequatur veniam ipsam sunt accusantium delectus tenetur
          eius minima laborum in culpa quas aperiam laudantium! Lorem ipsum
          dolor sit amet consectetur adipisicing elit. At culpa sed architecto
          fugiat nisi provident, officia, ut pariatur voluptate ex blanditiis
          dolor facilis eligendi repellat natus tenetur. Molestiae, vitae
          dolorem! Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Molestiae est magni labore sint dolorum iusto! Recusandae iste,
          dolorem aperiam nostrum quasi asperiores ducimus magnam id. Officia
          ullam veniam enim doloribus. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Officia alias eos quibusdam animi delectus facilis
          commodi aliquam, dicta adipisci culpa aspernatur, ducimus
          necessitatibus tenetur deserunt rem. Illo autem vel fugiat.
        </p>
        <div className="singlePostCategories">
          <p>categories :</p>
          <div className="singlePostCategory">student life</div>
          <div className="singlePostCategory">student life</div>
          <div className="singlePostCategory">student life</div>
          <div className="singlePostCategory">student life</div>
        </div>
      </div>
    </div>
  );
}
export default SinglePost;
