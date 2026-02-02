import { useState } from "react";
import {
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
  useLocation,
} from "react-router-dom";
import Spinner from "../components/Spinner";

export default function NewsLayout() {
  const [sideherotitle, setSideherotitle] = useState("");
  const categories = useLoaderData();
  const navigation = useNavigation();
  const location = useLocation();
  const isLoading = navigation.state === "loading";

  return (
    <section>
      <h1 className="hero-title">
        <span>News & Blog</span> {sideherotitle}
      </h1>

      <NewsCategoryLinks onClick={setSideherotitle} categories={categories} />

      {/* loading fallback UI */}
      {isLoading ? (
        <div key={`loading-${location.key}`} className="fade-in">
          <h2
            style={{
              padding: "40px 0 80px",
              display: "grid",
              gap: "10px",
              placeItems: "center",
              fontSize: "40px",
            }}
          >
            <Spinner />
            Loading News & Blogs...
          </h2>
        </div>
      ) : (
        <div key={`content-${location.key}`} className="fade-in">
          <Outlet />
        </div>
      )}
    </section>
  );
}

function NewsCategoryLinks({ onClick, categories }) {
  return (
    <div className="news-category-links">
      <NavLink to="/" onClick={() => onClick("")}>
        All
      </NavLink>

      {categories.map((category) => (
        <NavLink
          key={category.id}
          to={`news/${category.id}`}
          onClick={() => onClick(` / ${category.name}`)}
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}
