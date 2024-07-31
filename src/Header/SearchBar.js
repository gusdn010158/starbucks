import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import "./TopMenu.css";

function SearchBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  function handleSearchFocus() {
    setIsSearchFocused(true);
  }

  function handleSearchBlur() {
    setIsSearchFocused(false);
  }

  return (
    <div className="menu" onClick={handleSearchFocus}>
      <input
        className={isSearchFocused ? "sinput" : "sinputfocus"}
        type="text"
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        placeholder={isSearchFocused ? "통합검색" : ""}
      />
      <div className="material-icons">
        <FaSistrix size="26" />
      </div>
    </div>
  );
}

export default SearchBar;
