import React, { useEffect, useState } from "react";

import "./Body.css";
function Mainf() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setIsVisible(entry.isIntersecting);
      });
    });

    const targets = document.querySelectorAll(
      ".Body_seven_div_txt2, .Body_seven_div_button, .Body_seven_div_txt1"
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
      <section className="Body_six">
        <div className="Body_six_div">
          <div className="Body_six_div_img">
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_text_pc.png"
              alt="리저브 매거진에서 일상 속 특별함을 만나보세요."
            />
          </div>
          <div className="Body_six_div_img2">
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_visual_pc.png"
              alt=""
            />
          </div>
          <div className="Body_six_div_button">
            <a href="/coffee/reserve_magazine_list.do">자세히 보기</a>
          </div>
        </div>
      </section>
      <section className="Body_seven">
        <div className="Body_seven_div">
          <div className="Body_seven_div_img1"></div>
          <div className="Body_seven_div_img2"></div>
          <div className="Body_seven_div_img3"></div>
          <div className="Body_seven_div_img4"></div>
          <div className={`Body_seven_div_txt1 ${isVisible ? "o" : ""}`}></div>

          <div className={`Body_seven_div_txt2 ${isVisible ? "o" : ""}`}></div>
          <div className={`Body_seven_div_button ${isVisible ? "o" : ""}`}>
            <a href="/store/store_map.do">매장 찾기</a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Mainf;
