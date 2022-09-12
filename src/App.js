import React from "react";
import Intro from "./components/Intro";
import ContentAdmin from "./components/contentAdmin/ContentAdmin";
import KillingKittens from "./components/kk/KillingKittens";
import { useDispatch, useSelector } from "react-redux";
// import { setScrollPosition } from "./redux/scrollPositionSlice";
import { getUniqueId } from "./utils";
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

  let testEntry = {
    id: getUniqueId(),
    title: "Andy's first entry",
    imageLinks: ["AFE1", "AFE2", "AFE3"],
    format: 1, // 0 = slideshow 1 = carousel
    sortOrder: 0,
    hide: 0,
    entryTimestamp: Date.now(),
    updateTimestamp: 0,
  };

  return (
    <div className="App">
      <Intro bgColor={"#ee9b00"} />
      {/* <button onClick={() => getContent(testEntry)}>API</button> */}
      {/* <ContentAdmin /> */}

      {/* <KillingKittens /> */}
    </div>
  );
}

export default App;

/* 
#001219
#005F73
#0A9396
#94D2BD
#EE9B00
#CA6702
#BB3E03
#AE2012
#9B2226 
*/
