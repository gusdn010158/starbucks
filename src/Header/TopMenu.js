import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";

// TopMenu 전체 스타일링
const TopMenuWrapper = styled.div`
  .menu {
    right: 0;
    display: flex;
  }
`;

// nav 안의 ul 스타일링
const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
`;

// TopMenuItem 스타일링
const TopMenuItemWrapper = styled.li`
  color: rgba(70, 69, 72, 0.958);
  font-size: 13px;

  &::after {
    content: "|";
    color: rgba(209, 206, 215, 0.958);
    font-size: 13px;
    padding: 18px;
  }

  &:last-child::after {
    content: "";
  }
`;

// Link 스타일링
const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 13px;
`;

function TopMenu() {
  return (
    <TopMenuWrapper>
      <nav>
        <NavList>
          <TopMenuItem to="/" label="Sign in" />
          <TopMenuItem to="/" label="My Starbucks" />
          <TopMenuItem to="/" label="Customer Service & Ideas" />
          <TopMenuItem to="/" label="Find a store" />
          <SearchBar />
        </NavList>
      </nav>
    </TopMenuWrapper>
  );
}

function TopMenuItem({ to, label }) {
  return (
    <TopMenuItemWrapper>
      <StyledLink to={to}>{label}</StyledLink>
    </TopMenuItemWrapper>
  );
}

export default TopMenu;
