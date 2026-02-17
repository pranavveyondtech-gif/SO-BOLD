import { HeaderLogo, HeaderNavLinks } from "./Header";
import { NavLink } from "react-router";

export default function Footer() {
  return (
    <footer>
      <nav>
        <div>
          <HeaderLogo />
        </div>
        <div>
          <MenuFooter />
        </div>
        <div className="footer-nav-links">
          <HeaderNavLinks />
        </div>
        <div>
          <MenuPolicy />
        </div>
        <div>
          <MenuSocial />
        </div>
      </nav>
    </footer>
  );
}

function MenuFooter() {
  return (
    <ul className="d-grid">
      <li>
        <NavLink to="/">User Experience & Design</NavLink>
      </li>
      <li>
        <NavLink to="/">Website & Platform Development</NavLink>
      </li>
      <li>
        <NavLink to="/">Strategic SEO</NavLink>
      </li>
      <li>
        <NavLink to="/">Support & Mangement Retainers</NavLink>
      </li>
    </ul>
  );
}

function MenuPolicy() {
  return (
    <ul className="d-grid">
      <li>
        <NavLink to="/">Cookie Policy</NavLink>
      </li>
      <li>
        <NavLink to="/privacy-policy">Privacy Policy</NavLink>
      </li>
      <li>
        <NavLink to="/">Contact Us</NavLink>
      </li>
      <li>
        <NavLink to="/faqs">FAQs</NavLink>
      </li>
    </ul>
  );
}

function MenuSocial() {
  return (
    <ul className="d-grid">
      <li>
        <NavLink to="/">Instagram</NavLink>
      </li>
      <li>
        <a href="https://in.linkedin.com/in/pranavshilu" target="_blank">
          LinkedIn
        </a>
      </li>
    </ul>
  );
}
