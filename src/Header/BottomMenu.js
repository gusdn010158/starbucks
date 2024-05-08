import React, { useState, useEffect } from "react";
import axios from "axios";
import "./BottomMenu.css";

function BottomMenu() {
  const [sections, setSections] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [toast, setToast] = useState(false);

  useEffect(() => {
    axios
      .get("http://localhost:3001/menu")
      .then((response) => {
        setSections(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });

    // 컴포넌트가 마운트 해제될 때 이벤트 리스너를 제거합니다.
    return () => {
      setToast(false); // 컴포넌트가 마운트 해제될 때 toast 상태를 초기화합니다.
    };
  }, []);

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
        <div key={s.id} className="Bottom">
          <div
            className={`Bottomitems ${selectedIndex === s.id && "selected"}`}
            onMouseOver={() => handleMouseOver(s.id)}
          >
            {s.title}
          </div>

          {toast && selectedIndex === s.id ? (
            <div className="Bottomcontent">
              {s.items.map((item, idx) => (
                <ul key={idx}>
                  <h4>{item[0]}</h4>
                  {item.slice(1).map((subItem, subIdx) => (
                    <li className="contentli" key={subIdx}>
                      {subItem}
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
}

export default BottomMenu;
