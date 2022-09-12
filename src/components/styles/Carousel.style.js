import styled from "styled-components";
import arrowLeft from "../icons/arrowLeft.svg";
import arrowRight from "../icons/arrowRight.svg";

const StyledCarousel = styled.div`
  border: 1px blue dashed; //
  max-width: 100vw;

  h2 {
    text-align: center;
  }

  .imgContainer {
    padding: 1em;
    width: 100%;
    border: 1px red dotted; //
    overflow-x: scroll;
  }

  .innerImgContainer {
    height: 400px;
    width: fit-content;
    display: flex;
    border: 1px purple dotted; //
    overflow-x: scroll;
  }

  img {
    height: 100%;
    width: auto;
    /* float: left; */
  }
`;

export default StyledCarousel;
