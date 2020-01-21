import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header>
    <h1>Budget app</h1>
    <NavLink
      to="/"
      exact={true}
      activeClassName="is-active"
      className="nav-link"
    >
      Dashboard
    </NavLink>
    <NavLink to="/add-expense" activeClassName="is-active" className="nav-link">
      Add Expense
    </NavLink>
  </header>
);

export default Header;
