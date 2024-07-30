import React from "react";
import "./BottomMenu.css";

function BottomSection({ section, isSelected, onMouseOver, toast }) {
  return (
    <div className="Bottom">
      <div
        className={`Bottomitems ${isSelected && "selected"}`}
        onMouseOver={onMouseOver}
      >
        {section.title}
      </div>

      {toast && isSelected ? (
        <div className="Bottomcontent">
          {section.items.map((item, idx) => (
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
      ) : null}
    </div>
  );
}

export default BottomSection;
