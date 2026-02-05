import { NavLink } from "react-router";

export default function Home() {
  return (
    <section className="page">
      <h1>Home Page</h1>
      <NavLink to="/news" style={{color:'blue',textDecoration:'underline',fontSize:'40px'}}>Go to News & Blog page</NavLink>
    </section>
  );
}
