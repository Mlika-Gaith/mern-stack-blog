import NavBar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Write from "./pages/write/Write";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import UpdateAccount from "./pages/account/UpdateAccount";
import About from "./pages/about/about";
import NoMatch from "./pages/404/nomatch";

function App() {
  let user = true;
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/write" element={<Write />} />
        {user ? (
          <Route path="/login" element={<Home />} />
        ) : (
          <Route path="/login" element={<Login />} />
        )}
        <Route path="/login" element={<Login />} />
        {user ? (
          <Route path="/register" element={<Home />} />
        ) : (
          <Route path="/register" element={<Register />} />
        )}
        <Route path="/settings" element={<UpdateAccount />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
