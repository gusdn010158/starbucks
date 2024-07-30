// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { FaSistrix } from "react-icons/fa";
// import "./TopMenu.css";

// function TopMenu() {
//   const [isSearchFocused, setIsSearchFocused] = useState(false);

//   function handleSearchClick() {
//     setIsSearchFocused(true);
//   }

//   function handleSearchFocus() {
//     setIsSearchFocused(true);
//   }

//   function handleSearchBlur() {
//     setIsSearchFocused(false);
//   }

//   return (
//     <div className="TopMenu">
//       <nav>
//         <ul>
//           <Link to="/">
//             <li className="line">Sign in</li>
//           </Link>
//           <Link to="/">
//             <li className="line">My Starbucks</li>
//           </Link>
//           <Link to="/">
//             <li className="line">Customer Service & Ideas</li>
//           </Link>
//           <Link to="/">
//             <li className="line">Find a store</li>
//           </Link>

//           <div className="menu">
//             <div onClick={handleSearchClick}>
//               <input
//                 className={isSearchFocused ? "sinput" : "sinputfocus"}
//                 type="text"
//                 onFocus={handleSearchFocus}
//                 onBlur={handleSearchBlur}
//                 placeholder={isSearchFocused ? "통합검색" : ""}
//               />
//               <div className="material-icons">
//                 <FaSistrix size="26" />
//               </div>
//             </div>
//           </div>
//         </ul>
//       </nav>
//     </div>
//   );
// }

// export default TopMenu;

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
    <li className="line">
      <Link to={to}>{label}</Link>
    </li>
  );
}

export default TopMenu;
