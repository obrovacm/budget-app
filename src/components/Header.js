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
      home
    </NavLink>
    <NavLink to="/create" activeClassName="is-active" className="nav-link">
      create
    </NavLink>
    <NavLink to="/edit" activeClassName="is-active" className="nav-link">
      edit
    </NavLink>
    <NavLink to="/help" activeClassName="is-active" className="nav-link">
      help
    </NavLink>
  </header>
);

export default Header;
