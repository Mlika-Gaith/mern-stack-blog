import "./App.css";
import NavBar from "./components/Navbar/Navbar";
import Register from "./pages/register/Register";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Register />
    </div>
  );
}

export default App;
