import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BodySecond = styled.section`
  display: flex;
  flex-direction: row;
  object-fit: fill;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_bg.jpg");
  height: 34vw;
  @media (max-width: 960px) {
    height: 1700px;
  }
`;

const BodySecondDivPia = styled.div`
  position: relative;
  width: 100%;
  box-sizing: border-box;
  display: flex;
`;

const DivPiaImg = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 34vw;
  width: 50%;

  box-sizing: border-box;
`;

const DivPiaImg1 = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;

  img {
    width: clamp(1vw, 15vw, 20vw);

    height: auto;
    object-fit: contain;
    transition: opacity 1s, transform 1s;
    opacity: ${(props) => (props.visible ? 1 : 0)};
    transition-delay: 1.5s;
    transform: ${(props) =>
      props.visible ? "translateY(0)" : "translateY(20%)"};
    @media (max-width: 960px) {
      position: absolute;
      left: 10%;

      top: 30%;

      width: 40%;
    }
  }
`;

const DivPiaImg2 = styled(DivPiaImg1)`
  img {
    padding-top: 80px;

    transition-delay: 2s;

    @media (max-width: 960px) {
      top: 40%;
      left: 60%;
    }
  }
`;

const DivPiaImg3 = styled(DivPiaImg1)`
  img {
    transition-delay: 2.5s;
    @media (max-width: 960px) {
      top: 70%;
    }
  }
`;

const Didd = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  padding-left: 200px;
  padding-right: 00px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  @media (max-width: 960px) {
    padding-left: 0px;
  }
`;
const DivPiaLogo = styled.img`
  transition: all 2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition-delay: 0.5s;
  width: clamp(0px, 100%, 200%);
  @media (max-width: 960px) {
    position: absolute;
    top: 10%;
    right: 25%;
    width: 50%;
  }
`;
const DivPiaButton = styled.a`
  flex: 1;
  display: flex;
  align-items: center;
  margin: 20px;
  line-height: 40px;
  justify-content: center;
  font-size: 18px;
  padding: 15px;
  border-radius: 5px;
  transition: opacity 1s, transform 1s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  height: 15px;
  border: 2px solid #046241;
  color: #046241;
  transition-delay: ${(props) => (props.visible ? "3s" : "0s")};

  &:hover {
    transition: all 2s;
    background-color: #046241;
    color: #fff;
  }

  @media (max-width: 960px) {
    position: absolute;
    left: 40%;
    bottom: 1%;
  }
`;

function Maina() {
  const [Visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      });
    });

    const targets = document.querySelectorAll(
      ".divpia_logo, .divpia_img1, .divpia_img2, .divpia_img3, .divpia_button"
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      targets.forEach((target) => observer.unobserve(target));
    };
  }, []);

  return (
    <BodySecond>
      <BodySecondDivPia>
        <Didd>
          {" "}
          <div>
            <DivPiaLogo
              className="divpia_logo"
              visible={Visible}
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_logo.png"
              alt="HAPPY 2023 FIND YOUR LUCK"
            />
          </div>
          <div>
            <DivPiaButton
              href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2476"
              className="divpia_button"
              visible={Visible}
            >
              자세히 보기
            </DivPiaButton>
          </div>
        </Didd>

        <DivPiaImg>
          <DivPiaImg1 className="divpia_img1" visible={Visible}>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_1_1.png"
              alt="골든 미모사 그린 티"
            />
          </DivPiaImg1>
          <DivPiaImg2 className="divpia_img2" visible={Visible}>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_2_1.png"
              alt="블랙 햅쌀 고봉 라떼"
            />
          </DivPiaImg2>
          <DivPiaImg3 className="divpia_img3" visible={Visible}>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_3_1.png"
              alt="스타벅스 튜메릭 라떼"
            />
          </DivPiaImg3>
        </DivPiaImg>
      </BodySecondDivPia>
    </BodySecond>
  );
}

export default Maina;
