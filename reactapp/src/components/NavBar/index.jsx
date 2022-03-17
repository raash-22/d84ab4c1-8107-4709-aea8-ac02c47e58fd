import React from "react";
import "./styles.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav
      className="Navbar"
      style={{ backgroundColor: "whitesmoke", boxShadow: 10 }}
    >
      <h1>Frozen Cup </h1>
      <ul>
        <li>
          <NavLink to="/home" activeClassName="active">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            Cart
          </NavLink>
        </li>
        <li>
          <NavLink to="/" activeClassName="active">
            Order
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
