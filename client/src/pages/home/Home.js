import Header from "../../components/Header/Header";
import Posts from "./../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./Home.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
function Home() {
  // fetch posts here
  // empty aray for initial state
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
  return (
    <>
      <Header />
      <div className={styles.home}>
        <Posts posts={posts} />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
