import React from "react";
import StyledCarousel from "./Carousel.style";

//slide show
function Carousel({ content }) {
  console.log(content.imageLinks);
  return (
    <StyledCarousel>
      <h2>{content.title}</h2>
      <div className="imgContainer">
        <div className="innerImgContainer">
          {content.imageLinks.map((iL, i) => {
            return <img key={i} src={iL} />;
          })}
        </div>
      </div>
    </StyledCarousel>
  );
}

export default Carousel;
