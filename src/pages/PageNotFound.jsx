import { NavLink } from "react-router";
import { useEffect } from "react";
export default function PageNotFound() {
  useEffect(() => {
    document.title = "Page Not Found | SO BOLD";
  });

  return (
    <section className="notfound">
      <h1>404 - Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <NavLink to="/" className="return-home-link">
        Go back to Home
      </NavLink>
    </section>
  );
}
