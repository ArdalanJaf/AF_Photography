// import logo from './logo.svg';
// import "./App.css";
import React, { useEffect } from "react";
import KillingKittens from "./components/kk/KillingKittens";
import { useDispatch } from "react-redux";
import { setScrollPosition } from "./redux/scrollPositionSlice";

function App() {
  const dispatch = useDispatch();

  const handleScroll = () => {
    const position = window.pageYOffset;
    dispatch(setScrollPosition({ current: position }));
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);
  // }, []);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        margin: "0",
        padding: "2%",
        backgroundColor: "#999",
        // position: "relative",
      }}
      className="App"
    >
      <KillingKittens />
    </div>
  );
}

export default App;
