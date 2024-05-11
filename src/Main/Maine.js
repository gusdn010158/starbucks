import React, { useEffect, useState } from "react";
import "./Body.css";

function Maine() {
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });

    const targets = document.querySelectorAll(
      ".Body_five_div_txt, .Body_five_div_txt2"
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
    <>
      <section className="Body_f">
        <div className="Body_f_div">
          <div className="Body_f_div_txt">
            <img
              className="Body_f_div_txt_img"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2022/221220_pc_reserve_logo.png"
              alt="INDONESIA WEST JAVA"
            />
          </div>
          <div className="Body_f_div_logo">
            <img
              className="Body_f_div_logo_img"
              src="https://image.istarbucks.co.kr/img/event/2022/2212201_pc_reserve_coffee_bg.png"
              alt=""
            />
          </div>
          <div className="Body_f_div_button">
            <a href="https://www.starbucks.co.kr/whats_new/newsView.do?seq=5400">
              자세히 보기
            </a>
          </div>
        </div>
      </section>

      <section className="Body_five">
        <div className="Body_five_div">
          <div className={`Body_five_div_txt ${Visible ? "o" : ""}`}></div>
          <div className={`Body_five_div_txt2 ${Visible ? "o" : ""}`}></div>
          <div className="Body_five_div_img"></div>
          <div className="Body_five_div_button">
            <a href="https://www.starbucks.co.kr/menu/index.do">자세히 보기</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Maine;
