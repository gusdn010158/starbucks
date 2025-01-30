import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BodySix = styled.section`
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2021/reserve_bg_pc.png");
  transform: translateY(80px);
  height: 450px;
`;

const BodySixDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const BodySixDivImg = styled.div`
  position: absolute;
  margin-left: 400px;
  margin-right: 400px;
  padding-top: 110px;
`;

const BodySixDivImg2 = styled.div`
  position: absolute;
  left: 70%;
`;

const BodySixDivButton = styled.a`
  position: absolute;
  left: 40%;
  width: 130px;
  text-align: center;
  border-radius: 5px;
  border: #000 solid;
  line-height: 40px;
  transform: translateY(250px);
  color: #000;
  &:hover {
    transition: all 2s;
    background-color: #000;
    color: #fff;
    text-decoration: underline;
  }
`;

const BodySeven = styled.section`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_bg.jpg");
  height: 400px;
  position: relative;
  @media (max-width: 960px) {
    height: 900px;
  }
`;

const BodySevenDiv = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
`;

const BodySevenDivImg1 = styled.div`
  position: absolute;
  background-image: url("https://image.istarbucks.co.kr/img/event/2022/221212_main_story_2.png");
  left: 35%;
  transform: translateY(65%);
  height: 225px;
  width: 225px;
  z-index: 2;
`;

const BodySevenDivImg2 = styled.div`
  position: absolute;
  left: 20%;
  height: 310px;
  width: 360px;
  background-image: url("https://image.istarbucks.co.kr/img/event/2022/221212_main_story_1.png");
`;

const BodySevenDivImg3 = styled.div`
  left: 700px;
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_exp_img03.png");
  position: absolute;
  top: -60px;
  height: 142px;
  width: 343px;
`;

const BodySevenDivImg4 = styled.div`
  background-image: url("https://www.starbucks.co.kr/common/img/main/store_exp_img04.png");
  position: absolute;
  height: 102px;
  width: 230px;
  right: 250px;
  bottom: 0%;
`;

const BodySevenDivTxt1 = styled.div`
  background-image: url("https://image.istarbucks.co.kr/img/event/2022/221212_pc_main_story_txt_1.png");
  height: 54px;
  width: 374px;
  position: absolute;
  top: 30%;
  right: 0%;
  transition: all 1s;
  ${(props) => props.visible && "right: 20%;"}

  @media (max-width: 960px) {
    right: 28%;
    top: 45%;
  }
`;

const BodySevenDivTxt2 = styled.div`
  background-image: url("https://image.istarbucks.co.kr/img/event/2022/221212_pc_main_story_txt_2.png");
  height: 92px;
  width: 366px;
  right: 0%;
  top: 50%;
  position: absolute;
  transition: all 1s;
  ${(props) => props.visible && "right: 388px;"}
  @media (max-width: 960px) {
    right: 28%;
    top: 60%;
  }
`;

const BodySevenDivButton = styled.a`
  position: absolute;
  width: 130px;
  line-height: 40px;
  text-align: center;
  border-radius: 5px;
  border: #222 solid;
  font-size: 16px;
  top: 80%;
  right: 0;
  color: #222;
  transition: all 1s;
  ${(props) => props.visible && "right: 618px;"}

  &:hover {
    transition: all 2s;
    background-color: #222;
    color: #fff;
    text-decoration: underline;
  }

  @media (max-width: 960px) {
    right: 42%;
  }
`;

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
      <BodySix>
        <BodySixDiv>
          <BodySixDivImg>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_text_pc.png"
              alt="리저브 매거진에서 일상 속 특별함을 만나보세요."
            />
          </BodySixDivImg>
          <BodySixDivImg2>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/etc/reserve_visual_pc.png"
              alt=""
            />
          </BodySixDivImg2>
          <BodySixDivButton href="https://www.starbucks.co.kr/coffee/reserve_magazine_list.do">
            자세히 보기
          </BodySixDivButton>
        </BodySixDiv>
      </BodySix>

      <BodySeven>
        <BodySevenDiv>
          <BodySevenDivImg1 />
          <BodySevenDivImg2 />
          <BodySevenDivImg3 />
          <BodySevenDivImg4 />
          <BodySevenDivTxt1
            className="Body_seven_div_txt1"
            visible={isVisible}
          />
          <BodySevenDivTxt2
            className="Body_seven_div_txt2"
            visible={isVisible}
          />
          <BodySevenDivButton
            href="https://www.starbucks.co.kr/store/store_map.do"
            className="Body_seven_div_button"
            visible={isVisible}
          >
            매장 찾기
          </BodySevenDivButton>
        </BodySevenDiv>
      </BodySeven>
    </>
  );
}

export default Mainf;
