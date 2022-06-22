import Header from "../../components/Header/Header";
import Posts from "./../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  // fetch posts here
  // empty array for initial state
  const [posts, setPosts] = useState([]);
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
  const currentPosts = posts.slice(0, 7);
  return (
    <>
      <Header />
      <div className={styles.home}>
        <div className={styles.posts}>
          <Posts posts={currentPosts} />
        </div>
        <div className={styles.sidebar}>
          <SideBar />
        </div>
      </div>
    </>
  );
}

export default Home;
