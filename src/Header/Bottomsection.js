import React from "react";
import styled from "styled-components";

const BottomItems = styled.div`
  color: rgba(70, 69, 72, 0.958);
  padding: 20px;
  font-size: 15px;
  white-space: nowrap;
  &:hover,
  &.selected {
    text-decoration: underline;
    background-color: rgb(51, 51, 51);
    color: rgb(10, 128, 88);
  }
`;

const BottomContent = styled.div`
  display: block;
  background-color: rgb(51, 51, 51);
  color: aliceblue;
  position: fixed;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 300px;
`;

const ContentLi = styled.li`
  width: 120px;
  margin: 10px 0 10px 0;
  color: rgb(158, 155, 151);
  padding: 0;
  list-style: none;
`;

function BottomSection({ section, isSelected, onMouseOver, toast }) {
  return (
    <div>
      <BottomItems
        className={isSelected ? "selected" : ""}
        onMouseOver={onMouseOver}
      >
        {section.title}
      </BottomItems>

      {toast && isSelected ? (
        <BottomContent>
          {section.items.map((item, idx) => (
            <ul key={idx}>
              <h4>{item[0]}</h4>
              {item.slice(1).map((subItem, subIdx) => (
                <ContentLi key={subIdx}>{subItem}</ContentLi>
              ))}
            </ul>
          ))}
        </BottomContent>
      ) : null}
    </div>
  );
}

export default BottomSection;
