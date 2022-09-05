// import logo from './logo.svg';
// import "./App.css";
// import React, { useEffect } from "react";
import React from "react";
import ExistingContent from "./components/contentAdmin/ExistingContent";
import KillingKittens from "./components/kk/KillingKittens";
import { useDispatch, useSelector } from "react-redux";
// import { setScrollPosition } from "./redux/scrollPositionSlice";
import NewContentForm from "./components/contentAdmin/NewContentForm";
import Slideshow from "./components/contentAdmin/Slideshow";
import Carousel from "./components/contentAdmin/Carousel";

function App() {
  // const dispatch = useDispatch();

  // const handleScroll = () => {
  //   const position = window.pageYOffset;
  //   dispatch(setScrollPosition({ current: position }));
  // };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);
  const library = useSelector((state) => state.content.library);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: "0",
        padding: "2%",
        backgroundColor: "#fff",
        // position: "relative",
      }}
      className="App"
    >
      {/* <NewContentForm /> */}
      {/* 
      {library.map((content, index) =>
        content.slideShow ? (
          <Slideshow key={index} content={content} />
        ) : (
          <Carousel key={index} content={content} />
        )
      )} */}

      {/* <ExistingContent /> */}
      <KillingKittens />
    </div>
  );
}

export default App;
