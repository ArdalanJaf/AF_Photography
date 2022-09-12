import React from "react";
import styled from "styled-components";
import StyledSlide from "./styles/Slide.style";

const StyledH1 = styled.h1`
  font-size: 15vw;
`;

function Intro({ bgColor }) {
  return (
    <StyledSlide style={{ backgroundColor: bgColor }}>
      {" "}
      <StyledH1>
        ANDREA <br />
        FERNANDES
      </StyledH1>
    </StyledSlide>
  );
}

export default Intro;
