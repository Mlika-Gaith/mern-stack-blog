import styles from "./Write.module.css";
import img from "../../images/post1.png";
import Categories from "../../components/Categories/Categories";
import { useState, useContext } from "react";
import { Context } from "../../context/Context";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Write() {
  const { user } = useContext(Context);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState("");
  const [categories, setCategories] = useState([]);
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const handleCategories = (cats) => {
    setCategories(cats);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title: title,
      description: description,
      postPicture: "",
      categories: categories,
    };
    if (title && description && categories.length <= 4) {
      if (file) {
        const data = new FormData();
        // creating file name ( unique name for every image)
        // add upload time + image name
        const filename = Date.now() + file.name;
        data.append("name", filename);
        data.append("file", file);
        newPost.postPicture = filename;
        try {
          let response = await axios.post(
            "/file/upload/",
            data
          );
          console.log(response);
        } catch (error) {
          console.log(error);
        }
        const response = await axios.post(
          "/posts/post",
          newPost
        );
        setSuccess(true);
        navigate("/");
      } else {
        let choice = window.confirm("Add post without post picture ?");
        if (choice) {
          try {
            const response = await axios.post(
              "/posts/post",
              newPost
            );
            setSuccess(true);
            navigate("/");
          } catch (error) {
            console.log(error);
          }
        }
      }
    } else {
      window.alert(
        "Cannot add post without title or description or with more than 4 catgeories."
      );
    }
  };
  return (
    <div className={styles.write}>
      <form action="" onSubmit={handleSubmit} encType="multipart/form-data">
        <div className={styles.textContainer}>
          <h3>Write your post:</h3>
          <div className={styles.imgContainer}>
            {file ? (
              <img
                src={URL.createObjectURL(file)}
                alt="add pic to your blog post"
              />
            ) : (
              <img src={img} alt="add pic to your blog post" />
            )}

            <input
              type="file"
              id="fileUpload"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <label htmlFor="fileUpload" className={styles.fileUploadLabel}>
              choose an image : <i className="fa-solid fa-images"></i>
            </label>
          </div>
          <input
            type="text"
            placeholder="Blog post title"
            name="blogTitle"
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            name="blogDescription"
            id=""
            cols="30"
            rows="10"
            placeholder="Tell your story ..."
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          ></textarea>
        </div>
        <div className={styles.categoriesContainer}>
          <div className={styles.checkboxs}>
            <h4>Add Categories to your post : </h4>
            <Categories categories={handleCategories} />
          </div>
          <div className={styles.publishBtn}>
            <button type="submit">publish</button>
            {success ? (
              <p className={styles.publish_success}>Published successfully !</p>
            ) : null}
          </div>
        </div>
      </form>
    </div>
  );
}
export default Write;
