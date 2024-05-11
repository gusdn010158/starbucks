import React, { useEffect, useState } from "react";
import "./Body.css";

function Mainb() {
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        setVisible(entry.isIntersecting);
      });
    });

    const targets = document.querySelectorAll(
      ".Body_first_diva, .Body_first_divb, .Body_first_Button"
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
      <section className="Body_third">
        <div>
          <img
            className="Body_third_logo"
            src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
            alt="Starbucks Rewards"
          />
        </div>
        <div className="Body_third_content">
          <div className="Body_third_top">
            <div className="Body_third_top_txt">
              <h2>
                스타벅스만의 특별한 혜택,<strong>스타벅스 리워드</strong>
              </h2>
              <p className="Body_third_top_txt_p">
                스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요.
                <br></br>스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을
                즐기세요.
              </p>
            </div>
            <div className="Body_third_top_button">
              <a className="Body_third_top_button_a1" href="/mem/join.do">
                회원가입
              </a>
              <a
                className="Body_third_top_button_a2"
                href="javascript:$.loginLib.showLayerLogin();"
              >
                로그인
              </a>
            </div>
          </div>
          <div className="Body_third_bottom">
            <p>
              회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로
              구매하시고, 편리하게 등록하세요!<br></br>카드를 등록하여 스타벅스
              리워드 회원이 되신 후, 첫 구매를 하시면 무료 음료쿠폰을 드립니다!
            </p>
            <div>
              <a className="Btbuttom_a" href="/msr/sceGift/gift_step1.do">
                e-Gift Card 선물하기
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="Body_first">
        <div className="Body_first_div">
          <div className={`Body_first_diva ${Visible ? "o" : ""}`}>
            <img
              className="Body_first_diva_img"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_promotion_img.png"
              alt="엘살바도르 아우아차판"
            />
          </div>
          <div className={`Body_first_divb ${Visible ? "o" : ""}`}>
            <img
              className="Body_first_divb_img"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_promotion_txt.png"
              alt="크리스마스를 더욱 특별하게 만들어 줄 원두 크리스마스 블렌드"
            />
          </div>
          <a
            href="https://www.starbucks.co.kr/coffee/product_view.do?PRODUCT_CD=11148767"
            className={`Body_first_Button ${Visible ? "o" : ""}`}
          >
            자세히 보기
          </a>
        </div>
      </section>
    </>
  );
}

export default Mainb;
