import Header from "../../components/Header/Header";
import Posts from "./../../components/Posts/Posts";
import SideBar from "../../components/SideBar/SideBar";
import "./Home.css";
function Home() {
  return (
    <>
      <Header />
      <div className="home">
        <Posts />
        <SideBar />
      </div>
    </>
  );
}

export default Home;
