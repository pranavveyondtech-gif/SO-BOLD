import { NavLink } from "react-router";

export default function PageNotFound() {
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
