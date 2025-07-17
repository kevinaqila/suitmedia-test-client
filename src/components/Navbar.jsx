import { NavLink } from "react-router-dom";

export default function Navbar() {
  const getNavLinkClass = ({ isActive }) => (isActive ? "active" : "");

  return (
    <nav>
      <NavLink to="/work" className={getNavLinkClass}>
        Work
      </NavLink>
      <NavLink to="/about" className={getNavLinkClass}>
        About
      </NavLink>
      <NavLink to="/contact" className={getNavLinkClass}>
        Contact
      </NavLink>
      <NavLink to="/ideas" className={getNavLinkClass}>
        Ideas
      </NavLink>
      <NavLink to="/service" className={getNavLinkClass}>
        Service
      </NavLink>
      <NavLink to="/careers" className={getNavLinkClass}>
        Careers
      </NavLink>
    </nav>
  );
}
