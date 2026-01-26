import { NavLink } from "react-router";
import LOGO from "../../public/LOGO.svg";
import { useState } from "react";

// const activeStyle = ({ isActive }) => ({
//   backgroundColor: isActive ? "rgb(248 245 228)" : "white",
// });

// style={activeStyle}

export default function Header() {
  const [menu, setMenu] = useState(false);
  return (
    <>
      <header>
        <nav>
          <div>
            <HeaderLogo />
          </div>

          <div className="header-links">
            <HeaderNavLinks />
          </div>

          <div className="header-links">
            <HeaderNavButton />
          </div>

          <div className="responsive-links">
            <div>
              {menu ? (
                <i
                  className="bi bi-x-circle"
                  onClick={() => setMenu(false)}
                  style={{ fontSize: "50px" }}
                ></i>
              ) : (
                <i
                  className="bi bi-list"
                  onClick={() => setMenu(true)}
                  style={{ fontSize: "50px" }}
                ></i>
              )}
            </div>
          </div>
        </nav>
      </header>

      {menu && <ResponsiveHeaderNavLinks onClick={() => setMenu(false)} />}
    </>
  );
}

function ResponsiveHeaderNavLinks({ onClick }) {
  return (
    <nav className="responsive-nav">
      <ul className="responsive-ul">
        <li>
          <NavLink to="/services" onClick={onClick}>
            Services
          </NavLink>
        </li>
        <li>
          <NavLink to="/work" onClick={onClick}>
            Work
          </NavLink>
        </li>
        <li>
          <NavLink to="/" onClick={onClick}>
            News & Blog
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={onClick}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink to="/carrers" onClick={onClick}>
            Carrers
          </NavLink>
        </li>
        <li>
          <HeaderNavButton />
        </li>
      </ul>
    </nav>
  );
}

export function HeaderLogo() {
  return (
    <NavLink to="/">
      <img src={LOGO} alt="SO BOLD LOGO" />
    </NavLink>
  );
}

export function HeaderNavLinks() {
  return (
    <ul className="nav-links">
      <li>
        <NavLink to="/services" className="flexlink">
          <span>Services</span>
          <i className="bi bi-arrow-down-short"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/work">Work</NavLink>
      </li>
      <li>
        <NavLink to="/">News & Blog</NavLink>
      </li>
      <li>
        <NavLink to="/about" className="flexlink">
          <span>About</span>
          <i className="bi bi-arrow-down-short"></i>
        </NavLink>
      </li>
      <li>
        <NavLink to="/carrers">Carrers</NavLink>
      </li>
    </ul>
  );
}

function HeaderNavButton() {
  return (
    <NavLink to="start-project">
      <button className="navbtn">
        <span>Start a Project</span>
        <i className="bi bi-arrow-right"></i>
      </button>
    </NavLink>
  );
}
