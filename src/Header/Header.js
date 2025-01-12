import React from "react";
import { Link } from "react-router-dom";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import styled from "styled-components";

const HeaderWrapper = styled.div`
  z-index: 5;
  display: flex;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 120px;
  background-color: #f4f2eb;
`;

const HeaderIn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-right: 380px;
  margin-left: 380px;
`;

const HeaderLogo = styled.img`
  width: 80px;
  object-fit: cover;
`;

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

function Header() {
  return (
    <HeaderWrapper>
      <HeaderIn>
        <Link to="/">
          <HeaderLogo
            src="https://pngimg.com/uploads/starbucks/starbucks_PNG11.png"
            alt="Starbucks Logo"
          />
        </Link>
        <HeaderMain>
          <TopMenu />
          <BottomMenu />
        </HeaderMain>
      </HeaderIn>
    </HeaderWrapper>
  );
}

export default Header;
