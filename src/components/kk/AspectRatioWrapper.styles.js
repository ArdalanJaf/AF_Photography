import styled from "styled-components";

const AspectRatioWrapper = styled.div`
  aspect-ratio: 16/9;
  max-height: 100%;
  min-width: 100%;
  margin: auto; //on phone size, no margin (full screen)
  position: relative;
  overflow: hidden;
`;

export default AspectRatioWrapper;
