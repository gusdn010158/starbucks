import React, { useState, useEffect } from "react";

import "./BottomMenu.css";
import axios from "axios";

function BottomMenu() {
  const [sections, setSections] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:3001/menu")
      .then((response) => {
        setSections(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <div className="BottomMenu">
      {sections.map((section, index) => (
        <div key={index} className="Bottom">
          <div
            className="Bottomitems"
            onMouseOver={() => setSelectedIndex(index)} // 인덱스 설정
          >
            {section.title}
          </div>

          {selectedIndex === index && (
            <div className="Bottomcontent">
              {section.items.map((item, idx) => (
                <ul key={idx} className="content">
                  <h4>{item[0]}</h4>
                  {item.slice(1).map((subItem, subIdx) => (
                    <li className="contentli" key={subIdx}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BottomMenu;
