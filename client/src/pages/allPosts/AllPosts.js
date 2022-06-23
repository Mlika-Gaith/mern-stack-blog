import styles from "./AllPosts.module.css";
import SearchArea from "../../components/SearchArea/SearchArea";
import Posts from "./../../components/Posts/Posts";
import axios from "axios";
import { useState, useEffect } from "react";
import Pagination from "../../components/Pagination/Pagination";
import { useSearchParams } from "react-router-dom";
export default function AllPosts() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);
  const [searchParams, setSearchParams] = useSearchParams();
  const [filter, setFilter] = useState("");
  console.log(filter);
  useEffect(() => {
    async function fetchPosts() {
      try {
        const params = new URLSearchParams([["filter", filter]]);
        let response = await axios.get("/posts/", {
          params,
        });
        setPosts(response.data);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchPosts();
  }, [filter]);
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts
    .filter((post) => {
      let filter = searchParams.get("filter");
      if (!filter) return true;
      let title = post.title.toLowerCase();
      return title.includes(filter.toLowerCase());
    })
    .slice(indexOfFirstPost, indexOfLastPost);
  // change page function
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  var totalPosts = posts.length;
  if (searchParams.get("filter")) {
    totalPosts = posts.filter((post) => {
      let filter = searchParams.get("filter");
      if (!filter) return true;
      let title = post.title.toLowerCase();
      return title.includes(filter.toLowerCase());
    }).length;
  } else {
    totalPosts = posts.length;
  }
  return (
    <>
      <div className={styles.small_header}>
        <h5>Hey there browse our collection of posts</h5>
      </div>
      <div className={styles.main}>
        <div className={styles.search_area}>
          <SearchArea
            search={searchParams}
            setSearch={setSearchParams}
            filter={setFilter}
          />
        </div>
        <div className={styles.posts_area}>
          <Posts posts={currentPosts} />
          <Pagination
            totalPosts={totalPosts}
            postsPerPage={postsPerPage}
            paginate={paginate}
          />
        </div>
      </div>
    </>
  );
}
