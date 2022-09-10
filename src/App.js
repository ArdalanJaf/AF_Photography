// import logo from './logo.svg';
// import "./App.css";
// import React, { useEffect } from "react";
import React from "react";
import ContentAdmin from "./components/contentAdmin/ContentAdmin";
import KillingKittens from "./components/kk/KillingKittens";
import { useDispatch, useSelector } from "react-redux";
// import { setScrollPosition } from "./redux/scrollPositionSlice";
import Slideshow from "./components/contentAdmin/Slideshow";
import Carousel from "./components/contentAdmin/Carousel";
import Home from "./components/Home";
import getContent from "./API/getContent";

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
      <button onClick={() => getContent()}>API</button>
      <ContentAdmin />
      {/* {library.map((content, index) => {
        if (!content.hide) {
          return content.slideShow ? (
            <Slideshow key={index} content={content} />
          ) : (
            <Carousel key={index} content={content} />
          );
        }
      })} */}

      {/* <KillingKittens /> */}

      {/* <Home /> */}
    </div>
  );
}

export default App;
