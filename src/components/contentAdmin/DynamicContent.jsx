import React from "react";
import Slideshow from "./Slideshow";
import Carousel from "./Carousel";

function DynamicContent({ content }) {
  // switch statement used to easily add more formats in future.
  switch (content.format) {
    case 1:
      return <Carousel content={content} />;
    default:
      return <Slideshow content={content} />;
  }
}

export default DynamicContent;
