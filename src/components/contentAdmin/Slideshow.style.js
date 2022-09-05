import styled from "styled-components";
import arrowLeft from "../icons/arrowLeft.svg";
import arrowRight from "../icons/arrowRight.svg";

const StyledSlideshow = styled.div`
  border: 1px blue dashed; //

  h2 {
    text-align: center;
  }

  .imgContainer {
    height: 400px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    padding: 1em;
    border: 1px red dotted; //
  }

  img {
    height: 100%;
    width: auto;
  }

  button {
    position: absolute;
    width: 50%;
    height: 100%;
    top: 0;
    opacity: 0;
  }
  .prevImg {
    left: 0;
    cursor: url(${arrowLeft}), auto;
  }
  .nextImg {
    right: 0;
    cursor: url(${arrowRight}), auto;
  }
  .hideCursor {
    cursor: auto;
  }
`;

export default StyledSlideshow;
