import React, { useEffect, useState } from "react";
import styled from "styled-components";

const BodyF = styled.section`
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2022/221220_pc_reserve_bg.png");
  height: 400px;
  object-fit: fill;
`;

const BodyFDiv = styled.div`
  position: relative;
`;

const BodyFDivTxt = styled.div`
  position: absolute;
  padding-top: 100px;
  margin-left: 300px;
  margin-right: 300px;

  img {
    width: 100%;
  }
`;

const BodyFDivLogo = styled.div`
  position: absolute;
  img {
    object-fit: cover;
    width: 100%;
  }
`;

const BodyFDivButton = styled.a`
  position: absolute;
  left: 29%;
  width: 125px;
  border-radius: 5px;
  border: 2px solid #966932;
  transform: translateY(280px);
  text-align: center;
  color: #966932;
  font-size: 16px;
  line-height: 40px;

  &:hover {
    transition: all 2s;
    background-color: #966932;
    color: #fff;
    text-decoration: underline;
  }
`;

const BodyFive = styled.section`
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2022/2022_Chrismas2_PTF_bg.png");
  height: 800px;
  object-fit: fill;
  background-attachment: fixed;
`;

const BodyFiveDiv = styled.div`
  position: relative;
`;

const BodyFiveDivTxt = styled.div`
  position: absolute;
  left: 0%;
  transform: translateY(80%);
  background-image: url("https://www.starbucks.co.kr/common/img/main/fav_prod_txt01.png");
  height: 206px;
  width: 260px;
  transition: all 1s;

  ${(props) => props.visible && "left: 15%;"}
`;

const BodyFiveDivTxt2 = styled.div`
  position: absolute;
  left: 0%;
  transform: translateY(400px);
  background-image: url("https://www.starbucks.co.kr/common/img/main/fav_prod_txt02.png");
  height: 156px;
  width: 363px;
  transition: all 1s;

  ${(props) => props.visible && "left: 9%;"}
`;

const BodyFiveDivImg = styled.div`
  position: absolute;
  left: 40%;
  transform: translateY(20%);
  background-image: url("https://image.istarbucks.co.kr/upload/common/img/main/2023/230105_newyear_pick_img.png");
  height: 600px;
  width: 950px;
`;

const BodyFiveDivButton = styled.a`
  position: absolute;
  left: 21%;
  line-height: 40px;
  border-radius: 5px;
  border: 2px solid #fff;
  width: 125px;
  text-align: center;
  transform: translateY(650px);
  color: #fff;

  &:hover {
    transition: all 2s;
    background-color: #fff;
    color: #000;
    text-decoration: underline;
  }
`;

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
      <BodyF>
        <BodyFDiv>
          <BodyFDivTxt>
            <img
              src="https://image.istarbucks.co.kr/upload/common/img/main/2022/221220_pc_reserve_logo.png"
              alt="INDONESIA WEST JAVA"
            />
          </BodyFDivTxt>
          <BodyFDivLogo>
            <img
              src="https://image.istarbucks.co.kr/img/event/2022/2212201_pc_reserve_coffee_bg.png"
              alt=""
            />
          </BodyFDivLogo>
          <BodyFDivButton href="https://www.starbucks.co.kr/whats_new/newsView.do?seq=5400">
            자세히 보기
          </BodyFDivButton>
        </BodyFDiv>
      </BodyF>

      <BodyFive>
        <BodyFiveDiv>
          <BodyFiveDivTxt
            className="Body_five_div_txt"
            visible={Visible}
          ></BodyFiveDivTxt>
          <BodyFiveDivTxt2
            className="Body_five_div_txt2"
            visible={Visible}
          ></BodyFiveDivTxt2>
          <BodyFiveDivImg></BodyFiveDivImg>
          <BodyFiveDivButton href="https://www.starbucks.co.kr/menu/index.do">
            자세히 보기
          </BodyFiveDivButton>
        </BodyFiveDiv>
      </BodyFive>
    </>
  );
}

export default Maine;
