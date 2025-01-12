import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BodySecond = styled.section`
  display: flex;
  flex-direction: row;
  object-fit: fill;
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_bg.jpg");
  height: 34vw;
`;

const BodySecondDivPia = styled.div`
  position: relative;
  width: 100%;
`;

const DivPiaLogo = styled.img`
  position: absolute;
  width: 18%;
  left: 14.5%;
  transform: translateY(150px);
  transition: all 2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition-delay: 0.5s;
`;

const DivPiaImg = styled.div`
  position: relative;
  height: 34vw;
  width: 1519px;
`;

const DivPiaImg1 = styled.div`
  position: absolute;
  left: 50%;
  transform: translateY(15%);
  transition: all 2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition-delay: 1s;
`;

const DivPiaImg2 = styled.div`
  left: 63%;
  position: absolute;
  transform: translateY(50%);
  transition: all 2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition-delay: 1.5s;
`;

const DivPiaImg3 = styled.div`
  left: 78%;
  position: absolute;
  transform: translateY(35%);
  transition: all 2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition-delay: 2s;
`;

const DivPiaButton = styled.a`
  display: flex;
  justify-content: center;
  top: 66%;
  left: 365px;
  position: absolute;
  transition: all 2s;
  opacity: ${(props) => (props.visible ? 1 : 0)};
  transition-delay: 2.5s;
  border-radius: 5px;
  font-size: 18px;
  text-align: center;
  border: 2px solid #046241;
  color: #046241;
  line-height: 40px;
  width: 130px;
  height: 45px;

  &:hover {
    transition: all 2s;
    background-color: #046241;
    color: #fff;
  }
`;

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
    <BodySecond>
      <BodySecondDivPia>
        <div>
          <DivPiaLogo
            className="divpia_logo"
            visible={Visible}
            src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_logo.png"
            alt="HAPPY 2023 FIND YOUR LUCK"
          />
        </div>
        <DivPiaButton
          href="https://www.starbucks.co.kr/whats_new/campaign_view.do?pro_seq=2476"
          className="divpia_button"
          visible={Visible}
        >
          자세히 보기
        </DivPiaButton>
        <DivPiaImg>
          <DivPiaImg1 className="divpia_img1" visible={Visible}>
            <img
              className="tea_img1"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_1_1.png"
              alt="골든 미모사 그린 티"
            />
          </DivPiaImg1>
          <DivPiaImg2 className="divpia_img2" visible={Visible}>
            <img
              className="tea_img2"
              src="https://image.istarbucks.co.kr/upload/common/img/main/2023/2023_newyear_top_drink_2_1.png"
              alt="블랙 햅쌀 고봉 라떼"
            />
          </DivPiaImg2>
          <DivPiaImg3 className="divpia_img3" visible={Visible}>
            <img
              className="tea_img3"
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
