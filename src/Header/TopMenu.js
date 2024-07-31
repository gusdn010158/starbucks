import React from "react";
import { Link } from "react-router-dom";

import SearchBar from "./SearchBar";
import "./TopMenu.css";

function TopMenu() {
  return (
    <div className="TopMenu">
      <nav>
        <ul>
          <TopMenuItem to="/" label="Sign in" />
          <TopMenuItem to="/" label="My Starbucks" />
          <TopMenuItem to="/" label="Customer Service & Ideas" />
          <TopMenuItem to="/" label="Find a store" />
          <SearchBar />
        </ul>
      </nav>
    </div>
  );
}

function TopMenuItem({ to, label }) {
  return (
    <li className="ee">
      <Link to={to} style={{ color: "black", fontSize: "13px" }}>
        {label}
      </Link>
    </li>
  );
}

export default TopMenu;
