import React from "react";
import styled from "styled-components";
import StyledSlide from "./styles/Slide.style";


function Intro({ bgColor }) {
  return (
    <StyledSlide style={{ backgroundColor: bgColor }}>
      {" "}
      <h1>
        ANDREA <br />
        FERNANDES
      </h1>
    </StyledSlide>
  );
}

export default Intro;

const 