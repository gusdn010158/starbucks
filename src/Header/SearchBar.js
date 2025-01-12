import React, { useState } from "react";
import { FaSistrix } from "react-icons/fa";
import styled from "styled-components";

const Menu = styled.div`
  right: 0;
  display: flex;
`;

const Input = styled.input`
  width: ${(props) => (props.isFocused ? "180px" : "36px")};
  height: 34px;
  padding: 4px 10px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
  outline: none;
  background-color: #fff;
  color: #777;
  font-size: 12px;
  transition: width 0.4s;
`;

const IconContainer = styled.div`
  position: absolute;
  margin: auto;
  top: 17px;
  right: 384px;
  display: flex;
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
    <Menu onClick={handleSearchFocus}>
      <Input
        isFocused={isSearchFocused}
        type="text"
        onFocus={handleSearchFocus}
        onBlur={handleSearchBlur}
        placeholder={isSearchFocused ? "통합검색" : ""}
      />
      <IconContainer>
        <FaSistrix size="26" />
      </IconContainer>
    </Menu>
  );
}

export default SearchBar;
