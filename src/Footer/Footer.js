import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Footer.css";
function Footer() {
  const [sections, setSections] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/footer")
      .then((response) => {
        setSections(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data: ", error);
      });
  }, []);

  return (
    <>
      <div className="footer">
        <div className="footertop">
          <div className="ft_main">
            <div className="ft_map">
              {sections.map((s) => (
                <ul>
                  <h4>{s.h}</h4>
                  <li>{s.item1}</li>
                  <li>{s.item2}</li>
                  <li>{s.item3}</li>
                  <li>{s.item4}</li>
                  <li>{s.item5}</li>
                  <li>{s.item6}</li>
                  <li>{s.item7}</li>
                </ul>
              ))}
            </div>
            <div className="ft_flex">
              <img
                className="ft_img"
                src="https://www.starbucks.co.kr/common/img/footer/footer_logo.png"
              />
            </div>
          </div>
        </div>
        <div className="footermid">
          <div className="fm_main">
            <img src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_01.jpg" />

            <img src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_02.jpg" />
            <img src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_03.jpg" />
            <img src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_04.jpg" />
            <img src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_05.jpg" />
            <img src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_06.jpg" />
            <img src="https://image.istarbucks.co.kr/img/event/2022/footer_award_2211_07.jpg" />
          </div>
        </div>
        <div className="footerbottom">
          <div className="fb_main">
            <div className="fb_maint">
              <p>개인정보처리방침</p>
              <p>영상정보처리기기 운영관리 방침</p>
              <p>홈페이지 이용약관</p>
              <p>위치정보 이용약관</p>
              <p>스타벅스 카드 이용약관</p>
              <p>신세계 유니버스 클럽 이용약관</p>
              <p>비회원 이용약관</p>
              <p> My DT Pass 서비스 이용약관</p>
              <p>윤리경영 핫라인</p>
            </div>
            <div className="fb_maint">
              <div className="fb_maintb">찾아오시는 길</div>
              <div className="fb_maintb">신규입점제의</div>
              <div className="fb_maintb">사이트맵</div>
            </div>
            <div className="fb_maint">
              <p>사업자등록번호 : 201-81-21515</p>
              <p>주식회사 에스씨케이컴퍼니 대표이사 : 손정현</p>
              <p>TEL : 1522-3232</p>
              <p>개인정보 보호책임자 : 이찬우</p>
            </div>
            <p className="fb_mainp">
              ⓒ 2024 Starbucks Coffee Company. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
