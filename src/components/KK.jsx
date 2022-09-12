import React, { useState } from "react";
import { useEffect } from "react";
import styled from "styled-components";
import KillingKittens from "./kk/KillingKittens";
import StyledSlide from "./styles/Slide.style";
import HSlide from "./HSlide";
import { useDispatch, useSelector } from "react-redux";

const HSlideContainer = styled.div`
  min-height: 200vw; //width of content + max scroll height of KK
`;

const HSlideContent = styled.div`
  position: sticky;
  top: 0;
  display: flex;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
`;

function KKSlide({ bgColor }) {
  const scrollPosition = useSelector((state) => state.scrollPosition.current);

  useEffect(() => {
    const kkSlideOuter = document.getElementById("HSlideContainer");
    const kkSlideInner = document.getElementById("HSlideContent");
    const buffer = 300; // how much scroll on first slide before it goes sideways
    if (scrollPosition > kkSlideOuter.offsetTop) {
      kkSlideInner.scrollLeft =
        scrollPosition - kkSlideOuter.offsetTop - buffer;
    }
    console.log(scrollPosition.toFixed(2));
  }, [scrollPosition]);

  return (
    <HSlideContainer id="HSlideContainer">
      <HSlideContent id="HSlideContent">
        <StyledSlide style={{ backgroundColor: bgColor }}>
          {" "}
          <h1>KILLING KITTENS</h1>
        </StyledSlide>
        <StyledSlide style={{ backgroundColor: "#fff" }}>
          <KillingKittens />
        </StyledSlide>
      </HSlideContent>
    </HSlideContainer>
  );
}

export default KKSlide;
