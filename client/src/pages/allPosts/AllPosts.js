import styles from "./AllPosts.module.css";
import SearchArea from "../../components/SearchArea/SearchArea";
import Posts from "./../../components/Posts/Posts";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

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
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  // change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      <div className={styles.small_header}>
        <h5>Hey there browse our collection of posts</h5>
      </div>
      <div className={styles.main}>
        <div className={styles.search_area}>
          <SearchArea />
        </div>
        <div className={styles.posts_area}>
          <Posts posts={currentPosts} />
          <Pagination
            totalPosts={posts.length}
            postsPerPage={postsPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}
