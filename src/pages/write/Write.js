import "./Write.css";
import img from "../../images/post1.png";
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
            <ul>
              <li>
                <input type="checkbox" id="checkboxOne" value="tech" />
                <label htmlFor="checkboxOne">Tech</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxTwo" value="sports" />
                <label htmlFor="checkboxTwo">Sports</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxThree" value="culture" />
                <label htmlFor="checkboxThree">Culture</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxFour" value="science" />
                <label htmlFor="checkboxFour">Science</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxFive" value="student life" />
                <label htmlFor="checkboxFive">Student life</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxSix"
                  value="entertainement"
                />
                <label htmlFor="checkboxSix">Entertainement</label>
              </li>
              <li>
                <input
                  type="checkbox"
                  id="checkboxSeven"
                  value="certifications"
                />
                <label htmlFor="checkboxSeven">Certifications</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxEight" value="Camping" />
                <label htmlFor="checkboxEight">Camping</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxNine" value="social media" />
                <label htmlFor="checkboxNine">Social media</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxTen" value="leadership" />
                <label htmlFor="checkboxTen">Leadership</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxEleven" value="arts" />
                <label htmlFor="checkboxEleven">Arts</label>
              </li>
              <li>
                <input type="checkbox" id="checkboxTwelve" value="academic" />
                <label htmlFor="checkboxTwelve">Academic</label>
              </li>
            </ul>
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
