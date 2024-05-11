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
  const [fimg, setFimg] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001/fimg")
      .then((response) => {
        setFimg(response.data);
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
            {fimg.map((f) => (
              <img src={f.img} />
            ))}
          </div>
        </div>
        <div className="footerbottom">
          <div className="fb_main">
            <div className="fb_maint">
              {fimg.map((f) => (
                <p>{f.text}</p>
              ))}
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
