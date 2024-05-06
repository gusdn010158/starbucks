import React, { useEffect, useState } from "react";
import "./Body.css";

function Body() {
  const second = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("t");
      } else {
        entry.target.classList.remove("t");
      }
    });
  });
  const s = document.querySelectorAll(".divpia_logo");
  s.forEach((el) => {
    second.observe(el);
  });
  const second1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("t");
      } else {
        entry.target.classList.remove("t");
      }
    });
  });
  const s1 = document.querySelectorAll(".divpia_img1");
  s1.forEach((el) => {
    second1.observe(el);
  });
  const second2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("t");
      } else {
        entry.target.classList.remove("t");
      }
    });
  });
  const s2 = document.querySelectorAll(".divpia_img2");
  s2.forEach((el) => {
    second2.observe(el);
  });
  const second3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("t");
      } else {
        entry.target.classList.remove("t");
      }
    });
  });
  const s3 = document.querySelectorAll(".divpia_img3");
  s3.forEach((el) => {
    second3.observe(el);
  });

  const second4 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("t");
      } else {
        entry.target.classList.remove("t");
      }
    });
  });
  const s4 = document.querySelectorAll(".divpia_button");
  s4.forEach((el) => {
    second4.observe(el);
  });

  const first1 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("t");
      }
      //그 외의 경우 'tada' 클래스 제거
      else {
        entry.target.classList.remove("t");
      }
    });
  });
  //관찰할 대상을 선언하고, 해당 속성을 관찰시킨다.
  const f1 = document.querySelectorAll(".Body_first_diva");
  f1.forEach((el) => {
    first1.observe(el);
  });

  const first2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      //관찰 대상이 viewport 안에 들어온 경우 'tada' 클래스를 추가
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("t");
      }
      //그 외의 경우 'tada' 클래스 제거
      else {
        entry.target.classList.remove("t");
      }
    });
  });

  const f2 = document.querySelectorAll(".Body_first_divb");
  f2.forEach((el) => {
    first2.observe(el);
  });

  const first3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("t");
      } else {
        entry.target.classList.remove("t");
      }
    });
  });
  const f3 = document.querySelectorAll(".Body_first_Button");
  f3.forEach((el) => {
    first3.observe(el);
  });

  const five = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("l");
      }
      //그 외의 경우 'tada' 클래스 제거
      else {
        entry.target.classList.remove("l");
      }
    });
  });
  const scrollbox = document.querySelectorAll(".Body_five_div_txt");
  scrollbox.forEach((el) => {
    five.observe(el);
  });

  const five2 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("l");
      }
      //그 외의 경우 'tada' 클래스 제거
      else {
        entry.target.classList.remove("l");
      }
    });
  });
  const scrollbox2 = document.querySelectorAll(".Body_five_div_txt2");
  scrollbox2.forEach((el) => {
    five2.observe(el);
  });

  const seven = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("o");
      } else {
        entry.target.classList.remove("o");
      }
    });
  });

  const txt = document.querySelectorAll(".Body_seven_div_txt1");
  txt.forEach((el) => {
    seven.observe(el);
  });

  // const seven2 = new IntersectionObserver((entries) => {
  //   // Intersection Observer의 콜백 함수
  //   entries.forEach((entry) => {
  //     if (entry.intersectionRatio > 0) {
  //       // 요소가 교차되면 클래스를 추가합니다.
  //       entry.target.classList.add("o");
  //     } else {
  //       // 요소가 교차되지 않으면 클래스를 제거합니다.
  //       entry.target.classList.remove("o");
  //     }
  //   });
  // });

  // // 관찰할 대상 요소들을 선택합니다.
  // const txt2 = document.querySelectorAll(".Body_seven_div_txt2");

  // // 선택한 요소들을 Intersection Observer에 등록하여 관찰합니다.
  // txt2.forEach((el) => {
  //   seven2.observe(el);
  // });

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Intersection Observer 생성
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        // 요소가 교차되면 isVisible 상태를 true로 설정합니다.
        setIsVisible(entry.isIntersecting);
      });
    });

    // 관찰할 대상 요소를 선택합니다.
    const target = document.querySelector(".BottomMenu");

    // 선택한 요소를 Intersection Observer에 등록하여 관찰합니다.
    if (target) {
      observer.observe(target);
    }

    // 컴포넌트가 언마운트될 때 Intersection Observer를 해제합니다.
    return () => {
      observer.unobserve(target);
    };
  }, []);

  const seven3 = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > 0) {
        entry.target.classList.add("o");
      } else {
        entry.target.classList.remove("o");
      }
    });
  });

  const txt3 = document.querySelectorAll(".Body_seven_div_button");
  txt3.forEach((el) => {
    seven3.observe(el);
  });
  return (
    <div className="Body">
      <div className="cardhead"></div>

      <section className="Body_second">
        <div className="Body_second_divpia">
          <div className="Body_second_a">
            <img
              className="divpia_logo"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_logo.png"
              alt="HAPPY 2023 FIND YOUR LUCK"
            />
          </div>
          <div className="divpia_button">
            <a
              className="divpia_a"
              href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2111"
            >
              자세히 보기
            </a>
          </div>
          <div className="divpia_img">
            <div className="divpia_img1">
              <img
                className="tea_img1"
                src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_1_1.png"
                alt="골든 미모사 그린 티"
              />
            </div>
            <div className="divpia_img2">
              <img
                className="tea_img2"
                src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_2_1.png"
                alt="블랙 햅쌀 고봉 라떼"
              />
            </div>
            <div className="divpia_img3">
              <img
                className="tea_img3"
                src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_3_1.png"
                alt="스타벅스 튜메릭 라떼"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="Body_third">
        <div className="Body_third_logo">
          <img
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
              <hr></hr>
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
            <a
              className="Body_third_buttom_a"
              href="/msr/sceGift/gift_step1.do"
            >
              e-Gift Card 선물하기
            </a>
          </div>
        </div>
      </section>

      <section className="Body_first">
        <div className="Body_first_div">
          <div className="Body_first_diva">
            <img
              className="Body_first_diva_img"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_promotion_img.png"
              alt="엘살바도르 아우아차판"
            />
          </div>
          <div className="Body_first_divb">
            <img
              className="Body_first_divb_img"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_promotion_txt.png"
              alt="크리스마스를 더욱 특별하게 만들어 줄 원두 크리스마스 블렌드"
            />
          </div>
          <div className="Body_first_Button">
            <a href="https://www.starbucks.co.kr/coffee/product_view.do?PRODUCT_CD=11135964">
              자세히 보기
            </a>
          </div>
        </div>
      </section>

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
            <a href="https://www.starbucks.co.kr/whats_new/newsView.do?seq=4790">
              자세히 보기
            </a>
          </div>
        </div>
      </section>

      <section className="Body_five">
        <div className="Body_five_div">
          <div className="Body_five_div_txt"></div>
          <div className="Body_five_div_txt2"></div>
          <div className="Body_five_div_img"></div>
          <div className="Body_five_div_button">
            <a href="/menu/index.do">자세히 보기</a>
          </div>
        </div>
      </section>
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
          <div className="Body_seven_div_txt1"></div>
          <div className={`Body_seven_div_txt2 ${isVisible ? "o" : ""}`}></div>
          <div className="Body_seven_div_button">
            <a href="/store/store_map.do">매장 찾기</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Body;
// className="Body_seven_div_txt2"
