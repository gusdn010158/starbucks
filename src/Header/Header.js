import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa"; // 햄버거 아이콘
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
  margin-right: clamp(0px, 10vw, 700px); /* 최소 0px, 최대 700px */
  margin-left: clamp(0px, 10vw, 700px); /* 최소 0px, 최대 700px */

  @media (max-width: 960px) {
    margin-right: 20px; /* 화면 작아지면 로고 크기 조정 */
    margin-left: 20px; /* 화면 작아지면 로고 크기 조정 */
  }
`;

const HeaderLogo = styled.img`
  width: 80px;
  object-fit: cover;

  @media (max-width: 960px) {
    width: 60px; /* 화면 작아지면 로고 크기 조정 */
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
  display: none; /* 기본적으로 숨김 */

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

  // 화면 크기를 감지하여 isMobile 상태 업데이트
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 960);
    };

    handleResize(); // 초기값 설정
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <HeaderWrapper>
      <HeaderIn>
        {/* 로고 */}
        <Link to="/">
          <HeaderLogo
            src="https://pngimg.com/uploads/starbucks/starbucks_PNG11.png"
            alt="Starbucks Logo"
          />
        </Link>

        {/* 메뉴 또는 아이콘 */}
        <HeaderMain>
          {!isMobile ? (
            <>
              {/* 데스크탑에서는 메뉴 표시 */}
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
