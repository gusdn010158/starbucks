import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Bottomsection from "./Bottomsection";

import data from "../server/db.json";
function BottomMenu() {
  const [sections, setSections] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [toast, setToast] = useState(false);

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
    <BottomMen onMouseLeave={handleMouseLeave}>
      {sections.map((s) => (
        <Bottomsection
          key={s.id}
          section={s}
          isSelected={selectedIndex === s.id}
          onMouseOver={() => handleMouseOver(s.id)}
          toast={toast}
        />
      ))}
    </BottomMen>
  );
}

export default BottomMenu;
const BottomMen = styled.div`
  display: flex;
  justify-content: space-between;

  align-items: center;
  @media (max-width: 960px) {
    display: none; /* 960px 이하에서는 메뉴 숨김 */
  }
`;
