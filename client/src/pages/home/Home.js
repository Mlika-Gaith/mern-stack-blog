import Header from "../../components/Header/Header";
import Posts from "./../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../../components/Pagination/Pagination";
function Home() {
  // fetch posts here
  // empty array for initial state
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  // fetch with useEffect empty array indicates that useEffect should be fired at the beginnig
  useEffect(() => {
    async function fetchPosts() {
      try {
        let response = await axios.get("http://localhost:8081/posts/");
        setPosts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPosts();
  }, []);
  // get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={styles.posts}>
          <Posts posts={currentPosts} />
          <Pagination
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
          />
        </div>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default Home;
