import "./Write.css";
import img from "../../images/post1.png";
import Categories from "../../components/Categories/Categories";
function Write() {
  return (
    <div className="write">
      <form action="">
        <div className="textContainer">
          <h3>Write your post:</h3>
          <div className="imgContainer">
            <img src={img} alt="add pic to your blog post" />
            <input type="file" id="fileUpload" />
            <label htmlFor="fileUpload" className="fileUploadLabel">
              choose an image : <i className="fa-solid fa-images"></i>
            </label>
          </div>
          <input type="text" placeholder="Blog post title" name="blogTitle" />
          <textarea
            name="blogDescription"
            id=""
            cols="30"
            rows="10"
            placeholder="Tell your story ..."
          ></textarea>
        </div>
        <div className="categoriesContainer">
          <div className="checkboxs">
            <h4>Add Categories to your post : </h4>
            <Categories />
          </div>
          <div className="publishBtn">
            <button>publish</button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default Write;
