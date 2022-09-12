import React from "react";
import styled from "styled-components";
import StyledSlide from "./styles/Slide.style";

function Intro({ bgColor }) {
  return (
    <StyledSlide style={{ backgroundColor: bgColor }}>
      {" "}
      <styledH1>
        ANDREA <br />
        FERNANDES
      </styledH1>
    </StyledSlide>
  );
}

export default Intro;

const styledH1 = styled.h1`
  font-size: 80%;
`;
