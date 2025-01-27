import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import styled from "styled-components";

const Menu = styled.div`
  display: flex;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  width: ${(props) => (props.isFocused ? "180px" : "36px")};
  height: 34px;
  padding: 4px 30px 4px 10px; /* 아이콘 크기 고려 */
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: #777;
  font-size: 12px;
  transition: width 0.4s;
  box-sizing: border-box;
`;

const IconContainer = styled.div`
  position: absolute;
  right: 10px; /* input 내부 오른쪽 여백 */
  display: flex;
  align-items: center;
  justify-content: center;
  pointer-events: none; /* 아이콘 클릭 불가능 처리 */
`;

function SearchBar() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  function handleSearchFocus() {
    setIsSearchFocused(true);
  }

  function handleSearchBlur() {
    setIsSearchFocused(false);
  }

  return (
    <Menu>
      <InputWrapper>
        <Input
          isFocused={isSearchFocused}
          type="text"
          onFocus={handleSearchFocus}
          onBlur={handleSearchBlur}
          placeholder={isSearchFocused ? "통합검색" : ""}
        />
        <IconContainer>
          <FaSistrix size="20" />
        </IconContainer>
      </InputWrapper>
    </Menu>
  );
}

export default SearchBar;
