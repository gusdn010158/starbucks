import React from "react";
import styled from "styled-components";
import Mainf from "./Mainf";
import Maine from "./Maine";
import Mainb from "./Mainb";
import Maina from "./Maina";

const BodyContainer = styled.div`
  .cardhead {
    height: 120px;
  }
`;

function Body() {
  return (
    <BodyContainer>
      <div className="cardhead"></div>
      <Maina />
      <Mainb />
      <Maine />
      <Mainf />
    </BodyContainer>
  );
}

export default Body;
