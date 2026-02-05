import { Outlet, useNavigation, useLocation } from "react-router";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Spinner from "./components/Spinner";

function App() {
  const navigate = useNavigation();
  const location = useLocation();
  const isLoading = navigate.state === "loading";

  // Show spinner only when loading and NOT already on news page
  const shouldShowAppSpinner =
    isLoading && !location.pathname.startsWith("/news");

  return (
    <div className="container">
      <Header />
      {shouldShowAppSpinner ? (
        <div
          style={{
            padding: "150px 20px",
            display: "grid",
            placeItems: "center",
            // minHeight: "60vh",
          }}
        >
          <Spinner />
          <h2 style={{ fontSize: "40px", color: "#666", marginTop: "40px" }}>Loading...</h2>
        </div>
      ) : (
        <Outlet />
      )}
      <Footer />
    </div>
  );
}

export default App;
