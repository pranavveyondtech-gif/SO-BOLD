import { Outlet } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header />
      <Outlet />
      <Footer/>
    </div>
  );
}

export default App;
