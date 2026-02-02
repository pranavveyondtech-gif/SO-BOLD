import { Outlet, useNavigation } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

function App() {
  const navigate = useNavigation();
  const isLoading = navigate.state === "loading";

  return (
    <div className="container">
      <Header />
      {/* {isLoading ? <Spinner /> : <Outlet />} */}
      <Outlet/>
      <Footer />
    </div>
  );
}

export default App;
