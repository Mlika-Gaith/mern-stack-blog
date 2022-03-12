import SideBar from "../../components/SideBar/SideBar";
import SinglePost from "../../components/SinglePost/SinglePost";
import "./SinglePostPage.css";
function SinglePostPage() {
  return (
    <div className="singlePostPage">
      <SinglePost />
      <SideBar />
    </div>
  );
}
export default SinglePostPage;
