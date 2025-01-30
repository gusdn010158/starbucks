import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BodyFirst = styled.section`
  position: relative;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_promotion_bg.jpg");
  object-fit: fill;
  height: 573px;
  @media (max-width: 960px) {
    height: 773px;
  }
`;

const BodyFirstDiv = styled.div`
  position: relative;
  height: 100%;
`;

const BodyFirstDivA = styled.div`
  position: absolute;
  transform: translateY(15%);
  left: 0%;
  transition: all 2s;
  ${(props) => props.visible && "left: 25%;"}

  @media (max-width: 960px) {
    left: 37%;
  }
`;

const BodyFirstDivB = styled.div`
  position: absolute;
  transform: translateY(200px);
  right: 0%;
  transition: all 2s;
  ${(props) => props.visible && "right: 25%;"}
  @media (max-width: 960px) {
    top: 45%;
    left: 32%;
  }
`;

const BodyFirstButton = styled.a`
  position: absolute;
  transform: translateY(400px);
  text-align: center;
  width: 130px;
  font-size: 16px;
  border-radius: 5px;
  border: 2px solid #633510;
  right: 0;
  line-height: 38px;
  color: #633510;
  transition: all 2s;
  ${(props) => props.visible && "right: 680px;"}
  @media (max-width: 960px) {
    top: 35%;
    right: 42%;
  }
  &:hover {
    background-color: #633510;
    color: #fff;
    text-decoration: underline;
    transition: all 2s;
  }
`;

const BodyThird = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
  padding-bottom: 20px;
  background-color: #1e3932;
  @media (max-width: 960px) {
    height: 450px;
  }
`;

const BodyThirdLogo = styled.img`
  object-fit: cover;
  width: 210px;
  height: 180px;
  margin-right: 30px;
`;

const BodyThirdContent = styled.div`
  color: aliceblue;
  font-size: 20px;
`;

const BodyThirdTop = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const BodyThirdTopTxt = styled.div`
  h2 {
    @media (max-width: 960px) {
      width: 300px;
    }
    font-size: 25px;
  }
  p {
    font-size: 15px;
    @media (max-width: 960px) {
      width: 300px;
    }
  }
`;

const BodyThirdTopButton = styled.div`
  display: flex;
  font-size: 15px;
  justify-content: center;
  align-items: flex-end;
  margin: 20px 0px 20px 20px;
  @media (max-width: 960px) {
    margin: 20px 0px 20px 0px;
  }
  a {
    color: #fff;
    border-radius: 5px;
    padding: 5px 10px;
    &:first-child {
      background-color: #00704a;
      border: 2px solid #00704a;
    }
    &:first-child:hover,
    &:nth-child(2):hover {
      text-decoration: underline;
    }
    &:nth-child(2) {
      margin-left: 9px;
      padding: 5px 20px;
      background-color: transparent;
      border: 2px solid #fff;
    }
  }
`;

const BodyThirdBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column;
    align-items: flex-start;
  }
  p {
    font-size: 13px;
    width: 600px;
    @media (max-width: 960px) {
      width: 300px;
    }
  }

  a {
    padding: 5px 12px;
    font-size: 16px;
    text-align: center;
    border: 2px solid #fff;
    color: #fff;
    border-radius: 5px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

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
      <BodyThird>
        <div>
          <BodyThirdLogo
            src="https://image.istarbucks.co.kr/common/img/main/rewards-logo.png"
            alt="Starbucks Rewards"
          />
        </div>
        <BodyThirdContent>
          <BodyThirdTop>
            <BodyThirdTopTxt>
              <h2>
                스타벅스만의 특별한 혜택,<strong>스타벅스 리워드</strong>
              </h2>
              <p>
                스타벅스 회원이세요? 로그인을 통해 나만의 리워드를 확인해보세요.
                <br />
                스타벅스 회원이 아니세요? 가입을 통해 리워드 혜택을 즐기세요.
              </p>
            </BodyThirdTopTxt>
            <BodyThirdTopButton>
              <a href="/mem/join.do">회원가입</a>
              <a href="javascript:$.loginLib.showLayerLogin();">로그인</a>
            </BodyThirdTopButton>
          </BodyThirdTop>
          <BodyThirdBottom>
            <p>
              회원 가입 후, 스타벅스 e-Gift Card를 "나에게 선물하기"로
              구매하시고, 편리하게 등록하세요!
              <br />
              카드를 등록하여 스타벅스 리워드 회원이 되신 후, 첫 구매를 하시면
              무료 음료쿠폰을 드립니다!
            </p>
            <a href="/msr/sceGift/gift_step1.do">e-Gift Card 선물하기</a>
          </BodyThirdBottom>
        </BodyThirdContent>
      </BodyThird>

      <BodyFirst>
        <BodyFirstDiv>
          <BodyFirstDivA className="Body_first_diva" visible={Visible}>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_promotion_img.png"
              alt="엘살바도르 아우아차판"
            />
          </BodyFirstDivA>
          <BodyFirstDivB className="Body_first_divb" visible={Visible}>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_promotion_txt.png"
              alt="크리스마스를 더욱 특별하게 만들어 줄 원두 크리스마스 블렌드"
            />
          </BodyFirstDivB>
          <BodyFirstButton
            href="https://www.starbucks.co.kr/coffee/product_view.do?PRODUCT_CD=11148767"
            visible={Visible}
          >
            자세히 보기
          </BodyFirstButton>
        </BodyFirstDiv>
      </BodyFirst>
    </>
  );
}

export default Mainb;
