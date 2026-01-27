import { useState } from "react";
import {
  NavLink,
  Outlet,
  useLoaderData,
  useNavigation,
} from "react-router-dom";

export default function NewsLayout() {
  const [sideherotitle, setSideherotitle] = useState("");
  const categories = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <section>
      <h1 className="hero-title">
        <span>News & Blog</span> {sideherotitle}
      </h1>

      <NewsCategoryLinks onClick={setSideherotitle} categories={categories} />

      {/* loading fallback UI */}
      {isLoading ? (
        <h2 style={{ padding: "20px 0 100px", fontSize: "40px" }}>
          Loading News & Articles! Kindly wait a moment...
        </h2>
      ) : (
        <Outlet />
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
