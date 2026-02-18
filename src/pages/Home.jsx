import { NavLink } from "react-router";

export default function Home() {
  return (
    <section className="page">
      <h1>Home Page</h1>
      <h6 style={{ margin: "30px 0 20px" }}>Curently developed pages:</h6>

      <NavLink
        to="/news"
        style={{ color: "blue", textDecoration: "underline", fontSize: "25px" }}
      >
        News & Blog
      </NavLink>

      <NavLink
        to="/privacy-policy"
        style={{ color: "blue", textDecoration: "underline", fontSize: "25px" }}
      >
        Privacy Policy
      </NavLink>

      <NavLink
        to="/faqs"
        style={{ color: "blue", textDecoration: "underline", fontSize: "25px" }}
      >
        FAQs
      </NavLink>
    </section>
  );
}
