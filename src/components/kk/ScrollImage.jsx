import styled from "styled-components";

// @ scroll height + whatever, turn opacity grey

const StyledImgContainer = styled.div`
  position: absolute;
  overflow: hidden;
  max-height: 100%;
  /* max-height: fit-content; */

  /* opacity: 0.7; */
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
  /* filter: brightness(100%); */
`;

function ScrollImage({ src, width, heightReveal, left, right, top, bottom }) {
  return (
    <StyledImgContainer
      style={{
        height: `${heightReveal}%`,
        width: `${width}%`,
        top: `${top}%`,
        bottom: `${bottom}%`,
        left: `${left}%`,
        right: `${right}%`,
      }}
    >
      <StyledImage src={src} />
    </StyledImgContainer>
  );
}

export default ScrollImage;
