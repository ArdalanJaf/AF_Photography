import React, { useState } from "react";
import StyledSlideshow from "../styles/Slideshow.style";

//slide show
function Slideshow({ content }) {
  const [iLIndex, setILIndex] = useState(0);
  const { title, imageLinks } = content;
  return (
    <StyledSlideshow>
      <h2>{title}</h2>

      <div className="imgContainer">
        <img src={imageLinks[iLIndex]} />

        <button
          className={`nextImg ${
            iLIndex < imageLinks.length - 1 ? "" : "hideCursor"
          }`}
          onClick={() => setILIndex(iLIndex + 1)}
          disabled={iLIndex < imageLinks.length - 1 ? false : true}
        >
          next
        </button>
        <button
          className={`prevImg ${iLIndex > 0 ? "" : "hideCursor"}`}
          onClick={() => setILIndex(iLIndex - 1)}
          // className="prevImg"
          // onClick={() => setILIndex(iLIndex - 1)}
          disabled={iLIndex > 0 ? false : true}
        >
          prev
        </button>
      </div>
    </StyledSlideshow>
  );
}

export default Slideshow;
