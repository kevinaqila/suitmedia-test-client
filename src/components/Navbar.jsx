import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/work">Work</NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/contact">Contact</NavLink>
      <NavLink to="/ideas">Ideas</NavLink>
      <NavLink to="/service">Service</NavLink>
      <NavLink to="/careers">Careers</NavLink>
    </nav>
  );
}
