import React, { useState, useEffect } from "react";

import Bottomsection from "./Bottomsection";
import "./BottomMenu.css";
import data from "../server/db.json";
function BottomMenu() {
  const [sections, setSections] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [toast, setToast] = useState(false);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3001/menu")
  //     .then((response) => {
  //       setSections(response.data);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data: ", error);
  //     });

  //   return () => {
  //     setToast(false);
  //   };
  // }, []);
  useEffect(() => {
    setSections(data.menu);
  });

  const handleMouseOver = (index) => {
    setSelectedIndex(index);
    setToast(true);
  };

  const handleMouseLeave = () => {
    setSelectedIndex(null);
    setToast(false);
  };

  return (
    <div className="BottomMenu" onMouseLeave={handleMouseLeave}>
      {sections.map((s) => (
        <Bottomsection
          key={s.id}
          section={s}
          isSelected={selectedIndex === s.id}
          onMouseOver={() => handleMouseOver(s.id)}
          toast={toast}
        />
      ))}
    </div>
  );
}

export default BottomMenu;
