import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
