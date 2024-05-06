import React, { useEffect, useState } from "react";
import "./Body.css";
import styled from "styled-components";
function Maina() {
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });

    const targets = document.querySelectorAll(
      ".divpia_logo, .divpia_img1, .divpia_img2, .divpia_img3, .divpia_button"
    );

    targets.forEach((target) => {
      observer.observe(target);
    });

    return () => {
      targets.forEach((target) => {
        observer.unobserve(target);
      });
    };
  }, []);

  return (
    <section className="Body_second">
      <div className="Body_second_divpia">
        <div className="Body_second_a">
          <img
            className={`divpia_logo ${Visible ? "o" : ""}`}
            src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_logo.png"
            alt="HAPPY 2023 FIND YOUR LUCK"
          />
        </div>
        <div className={`divpia_button ${Visible ? "o" : ""}`}>
          <a
            className="divpia_a"
            href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2111"
          >
            자세히 보기
          </a>
        </div>
        <div className="divpia_img">
          <div className={`divpia_img1 ${Visible ? "o" : ""}`}>
            <img
              className="tea_img1"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_1_1.png"
              alt="골든 미모사 그린 티"
            />
          </div>
          <div className={`divpia_img2 ${Visible ? "o" : ""}`}>
            <img
              className="tea_img2"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_2_1.png"
              alt="블랙 햅쌀 고봉 라떼"
            />
          </div>
          <div className={`divpia_img3 ${Visible ? "o" : ""}`}>
            <img
              className="tea_img3"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_3_1.png"
              alt="스타벅스 튜메릭 라떼"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Maina;
