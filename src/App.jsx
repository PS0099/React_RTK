import { Outlet } from "react-router-dom";
import "./App.css";
import Home from "./Compo/Home";
import Navbar from "./Compo/NavBar";

function App() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Home />
    </>
  );
}

export default App;
