import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";

function Header() {
  return (
    <div className="header">
      <div className="headerin">
        <Link to="/">
          <img
            className="header_logo"
            src="https://pngimg.com/uploads/starbucks/starbucks_PNG11.png"
          />
        </Link>
        <div className="header_main">
          <TopMenu />
          <BottomMenu />
        </div>
      </div>
    </div>
  );
}

export default Header;
