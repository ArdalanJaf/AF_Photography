import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import KillingKittens from "./kk/KillingKittens";
import StyledSlide from "./styles/Slide.style";

// const StyledHSlideContainer = styled.div`
//   min-height: 200vw; //width of content + max height of KK
// `;

const HSlideContent = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: scroll;
`;

function HSlide() {
  // Hscroll position = scroll position - start.
  useEffect(() => {}, []);

  return (
    // <StyledHSlideContainer id="HSlideContainer">
    <HSlideContent id="HSlideContent" />
    // </StyledHSlideContainer>
  );
}

export default HSlide;
