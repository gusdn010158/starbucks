import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import styled from "styled-components";
import TopMenu from "./TopMenu";
import BottomMenu from "./BottomMenu";
import { FaBookmark } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
const HeaderWrapper = styled.div`
  z-index: 5;
  display: flex;
  position: fixed;
  top: 0px;
  width: 100vw;
  height: 120px;
  background-color: #f4f2eb;
  @media (max-width: 960px) {
    height: 80px;
  }
`;

const HeaderIn = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  margin-right: clamp(0px, 10vw, 700px);
  margin-left: clamp(0px, 10vw, 700px);

  @media (max-width: 960px) {
    margin-right: 20px;
    margin-left: 20px;
  }
`;

const HeaderLogo = styled.img`
  width: 80px;
  object-fit: cover;

  @media (max-width: 960px) {
    width: 60px;
  }
`;

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;

  @media (max-width: 960px) {
    align-items: center;
  }
`;

const MenuIcon = styled.div`
  display: none;

  @media (max-width: 960px) {
    display: flex;
    align-items: center;
    width: 130px;
    justify-content: space-around;
    font-size: 24px;
    cursor: pointer;
  }
`;

function Header() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

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
          {!isMobile ? (
            <>
              <TopMenu />
              <BottomMenu />
            </>
          ) : (
            <MenuIcon>
              <BsPersonFill />
              <FaBookmark />
              <FaBars />
            </MenuIcon>
          )}
        </HeaderMain>
      </HeaderIn>
    </HeaderWrapper>
  );
}

export default Header;
