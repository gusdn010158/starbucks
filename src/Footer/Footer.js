import React, { useState, useEffect } from "react";
import styled from "styled-components";
import data from "../server/db.json";

const FooterWrapper = styled.div`
  width: 100%;
`;

const FooterTop = styled.div`
  width: 100%;
  background-color: rgb(51, 51, 51);
  height: 300px;
  display: flex;

  justify-content: center;
`;

const FtMain = styled.div`
  width: 1250px;
  display: flex;
  justify-content: space-between;
`;

const FtMap = styled.div`
  width: 1000px;
  display: flex;
  justify-content: space-between;
`;

const FtMapUl = styled.ul`
  color: white;
`;

const FtMapLi = styled.li`
  color: white;
  font-size: 12px;
  list-style: none;
`;

const FtImg = styled.img`
  object-fit: cover;
  height: 210px;
  width: 20px;
`;

const FtFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
`;

const FooterMid = styled.div`
  background-color: rgb(41, 41, 41);
  width: 100%;
  height: 110px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FmMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1270px;
  height: 80px;
`;

const FooterBottom = styled.div`
  background-color: rgb(51, 51, 51);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 230px;
`;

const FbMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 1270px;
  height: 80%;
`;

const FbMaint = styled.div`
  display: flex;
`;

const FbMaintP = styled.p`
  color: white;
  font-size: 12px;
  padding-right: 8px;
  margin: 4px;
  border-right: 1px solid rgb(66, 66, 66);
`;

const FbMaintB = styled.div`
  border: 2px solid white;
  border-radius: 5px;
  padding: 5px 20px;
  color: white;
  margin: 10px 10px 25px 0px;
`;

const FbMainP = styled.p`
  color: white;
  font-size: 12px;
`;

function Footer() {
  const [sections, setSections] = useState([]);
  const [fimg, setFimg] = useState([]);
  const [ftext, setFtext] = useState([]);
  useEffect(() => {
    setSections(data.footer);
  }, []);
  useEffect(() => {
    setFimg(data.fimg);
  }, []);
  useEffect(() => {
    setFtext(data.ftext);
  }, []);
  return (
    <FooterWrapper>
      <FooterTop>
        <FtMain>
          <FtMap>
            {sections.map((s, index) => (
              <FtMapUl key={index}>
                <h4>{s.h}</h4>
                <FtMapLi>{s.item1}</FtMapLi>
                <FtMapLi>{s.item2}</FtMapLi>
                <FtMapLi>{s.item3}</FtMapLi>
                <FtMapLi>{s.item4}</FtMapLi>
                <FtMapLi>{s.item5}</FtMapLi>
                <FtMapLi>{s.item6}</FtMapLi>
                <FtMapLi>{s.item7}</FtMapLi>
              </FtMapUl>
            ))}
          </FtMap>
          <FtFlex>
            <FtImg
              src="https://www.starbucks.co.kr/common/img/footer/footer_logo.png"
              alt="Starbucks Footer Logo"
            />
          </FtFlex>
        </FtMain>
      </FooterTop>

      <FooterMid>
        <FmMain>
          {fimg.map((f, index) => (
            <img key={index} src={f.img} alt="Footer Image" />
          ))}
        </FmMain>
      </FooterMid>

      <FooterBottom>
        <FbMain>
          <FbMaint>
            {ftext.map((f, index) => (
              <FbMaintP key={index}>{f.text}</FbMaintP>
            ))}
          </FbMaint>
          <FbMaint>
            <FbMaintB>찾아오시는 길</FbMaintB>
            <FbMaintB>신규입점제의</FbMaintB>
            <FbMaintB>사이트맵</FbMaintB>
          </FbMaint>
          <FbMaint>
            <FbMaintP>사업자등록번호 : 201-81-21515</FbMaintP>
            <FbMaintP>주식회사 에스씨케이컴퍼니 대표이사 : 손정현</FbMaintP>
            <FbMaintP>TEL : 1522-3232</FbMaintP>
            <FbMaintP>개인정보 보호책임자 : 이찬우</FbMaintP>
          </FbMaint>
          <FbMainP>
            ⓒ 2024 Starbucks Coffee Company. All Rights Reserved.
          </FbMainP>
        </FbMain>
      </FooterBottom>
    </FooterWrapper>
  );
}

export default Footer;
