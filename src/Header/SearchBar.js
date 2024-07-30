import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import "./TopMenu.css";

function SearchBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(true);

  function handleSearchFocus() {
    setIsSearchFocused(true);
  }

  function handleSearchBlur() {
    setIsSearchFocused(true);
  }

  return (
    <div className="menu" onClick={() => setIsSearchFocused(false)}>
      <input
        className={isSearchFocused ? "sinputfocus" : "sinput"}
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
