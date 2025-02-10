import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";
import styled from "styled-components";

const TopMenuWrapper = styled.div`
  .menu {
    right: 0;
    display: flex;
  }
`;

const NavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-direction: row;
  margin: 0px;
  padding: 0px;
  @media (max-width: 960px) {
    display: none;
  }
`;

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
