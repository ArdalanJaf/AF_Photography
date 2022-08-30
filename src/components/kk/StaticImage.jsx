import styled from "styled-components";

const StyledImgContainer = styled.div`
  position: absolute;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: auto;
  /* position: absolute; */
  /* bottom: 0; */
`;

function StaticImage({ src, width, height, left, right, top, bottom }) {
  return (
    <StyledImgContainer
      style={{
        height: `${height}%`,
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

export default StaticImage;
