import SideBar from "../../components/SideBar/SideBar";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./SinglePostPage.css";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";
import { useContext } from "react";
function SinglePostPage() {
  const { user } = useContext(Context);
  const params = useParams();
  const [post, setPost] = useState([]);
  // whenever the path changes (the id in the url) fire this useState
  useEffect(() => {
    const getPost = async () => {
      const response = await axios.get(
        "http://localhost:8081/posts/" + params.id
      );
      setPost(response.data);
    };
    getPost();
  }, [params.id]);

  return (
    <div className="singlePostPage">
      <SinglePost post={post} />
      <SideBar />
    </div>
  );
}
export default SinglePostPage;
