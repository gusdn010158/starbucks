// import React from "react";
// import { Link } from "react-router-dom";
// import TopMenu from "./TopMenu";
// import BottomMenu from "./BottomMenu";
// import styled from "styled-components";

// const HeaderWrapper = styled.div`
//   z-index: 5;
//   display: flex;
//   position: fixed;
//   top: 0px;
//   width: 100vw;
//   height: 120px;
//   background-color: #f4f2eb;
// `;

// const HeaderIn = styled.div`
//   display: flex;
//   width: 100%;
//   justify-content: space-between;
//   align-items: center;
//   margin-right: 380px;
//   margin-left: 380px;
// `;

// const HeaderLogo = styled.img`
//   width: 80px;
//   object-fit: cover;
// `;

// const HeaderMain = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-content: center;
// `;

// function Header() {
//   return (
//     <HeaderWrapper>
//       <HeaderIn>
//         <Link to="/">
//           <HeaderLogo
//             src="https://pngimg.com/uploads/starbucks/starbucks_PNG11.png"
//             alt="Starbucks Logo"
//           />
//         </Link>
//         <HeaderMain>
//           <TopMenu />
//           <BottomMenu />
//         </HeaderMain>
//       </HeaderIn>
//     </HeaderWrapper>
//   );
// }

// export default Header;
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

  @media (max-width: 1024px) {
    /* 모바일 중형 모드 */
    margin-right: 100px;
    margin-left: 100px;
  }
  @media (max-width: 767px) {
    /* 모바일 중형 모드 */
    margin-right: 0px;
    margin-left: 0px;
  }
`;

const HeaderLogo = styled.img`
  width: 80px;
  object-fit: cover;

  @media (max-width: 767px) {
    /* 모바일 중형 모드 */
    width: 60px;
  }
`;

const HeaderMain = styled.div`
  display: flex;
  flex-direction: column;
  align-content: center;

  @media (max-width: 767px) {
    /* 모바일 중형 모드 */
    align-items: center;
  }
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
