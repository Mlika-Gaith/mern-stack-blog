import Header from "../../components/Header/Header";
import Posts from "./../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import styles from "./Home.module.css";
function Home() {
  return (
    <>
      <Header />
      <div className={styles.home}>
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
