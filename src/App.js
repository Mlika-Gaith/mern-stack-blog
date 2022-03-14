import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Register />
      <Footer />
    </div>
  );
}

export default App;
