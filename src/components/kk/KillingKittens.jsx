import React, { useState, useEffect } from "react";
import AspectRatioWrapper from "./AspectRatioWrapper.styles";
import KKContainer from "./KKContainer.styles";
import KKScroller from "./KKScroller.style";
import ScrollImage from "./ScrollImage";
import StaticImage from "./StaticImage";
import Spacer from "./Spacer";
import Text from "./Text";
// images <to be replaced by URLS>
import upskirt from "../../images/kk/wAndrea Fernandes_Killing_Kittens_8.jpg";
import tree from "../../images/kk/wAndrea Fernandes_Killing Kittens_4.jpg";
import lips from "../../images/kk/wAndrea Fernandes_Killing Kittens_16.jpg";
import hob from "../../images/kk/wAndrea Fernandes_Killing Kittens_1.jpg";
import rope from "../../images/kk/wAndrea Fernandes_Killing Kittens_6.jpg";
import bathroom from "../../images/kk/wAndrea Fernandes_Killing Kittens_15.jpg";
import banana from "../../images/kk/wAndrea Fernandes_Killing Kittens_11.jpg";
import washingMachine from "../../images/kk/wAndrea Fernandes_Killing Kittens_7.jpg";
import sink from "../../images/kk/wAndrea Fernandes_Killing Kittens_9.jpg";
import blood from "../../images/kk/wAndrea Fernandes_Killing Kittens_12.jpg";
import bike from "../../images/kk/wAndrea Fernandes_Killing Kittens_13.jpg";
import bed from "../../images/kk/wAndrea Fernandes_Killing Kittens_14.jpg";
import train from "../../images/kk/wAndrea Fernandes_Killing Kittens_10.jpg";
import cooking from "../../images/kk/wAndrea Fernandes_Killing Kittens_5.jpg";
import shower from "../../images/kk/wAndrea Fernandes_Killing Kittens_3.jpg";
import office from "../../images/kk/wAndrea Fernandes_Killing Kittens_2.jpg";

function KillingKittens() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fontSize, setFontSize] = useState("");

  //
  const handleScroll = () => {
    let fromTop = document.getElementById("kkScroller").scrollTop; // height scrolled from top of container
    let maxHeight = document.getElementById("kkScroller").offsetHeight; // total height of container
    let percentage = (fromTop / maxHeight) * 100;
    setScrollPosition(percentage);
  };

  //
  function imgReveal(startReveal) {
    return scrollPosition > startReveal - 1 ? scrollPosition - startReveal : 0;
  }

  // scale font size relative to VW
  function setDynamicFontSize() {
    let maxWidth = document.getElementById("kkScroller").offsetWidth;
    setFontSize(maxWidth / 50);
  }

  // apply event listener to VW
  useEffect(() => {
    setDynamicFontSize();
    window.addEventListener("resize", setDynamicFontSize);
    return () => window.removeEventListener("resize", setDynamicFontSize);
  }, []);

  return (
    <>
      {/* <div style={{ position: "fixed", top: "0%", left: "50%" }}>
        Hello {}px, {scrollPosition}%
      </div> */}

      <AspectRatioWrapper>
        <KKContainer style={{ fontSize: `${fontSize}px` }}>
          <StaticImage src={upskirt} width={64} top={0} left={0} />
          <Text
            width={64}
            bottom={8}
            left={0}
            heightReveal={imgReveal(0)}
            maxHeight={92}
            color="#1b210a5a"
            textAlign={"center"}
            paddingTop={13}
            gap={12.5}
            text={
              <>
                <p>Sometimes I've noticed men trying to look up my skirt. </p>
                <p>That just makes me laugh.</p>
              </>
            }
          />
          <ScrollImage
            src={tree}
            width={40} //size
            bottom={2}
            right={25}
            heightReveal={imgReveal(100)} //where to reveal
          />
          <Text
            width={40}
            bottom={2}
            right={25}
            heightReveal={imgReveal(157)}
            maxHeight={57.8}
            color="#26270e6b"
            text={
              <p>
                For the record <br />I have no interest <br />
                in being caught <br />
                or having anyone <br /> see me.
              </p>
            }
          />
          <ScrollImage
            src={lips}
            width={30} //size
            bottom={5}
            left={2}
            heightReveal={imgReveal(218)} //where to reveal 180
          />
          <Text
            width={30}
            bottom={5}
            left={2}
            heightReveal={imgReveal(300)}
            maxHeight={80.2}
            color="#320e114f"
            paddingTop={95}
            text={
              <p>
                Have you ever served dessert to your guests and then got
                offended when they told you it smelled weird?
              </p>
            }
          />
          <ScrollImage
            src={hob}
            width={30.2} //size
            bottom={5}
            left={2}
            heightReveal={imgReveal(385)} //where to reveal
          />
          <Text
            width={30.2}
            bottom={5}
            left={2}
            heightReveal={imgReveal(470)}
            maxHeight={80.2}
            color="#320e114f"
            paddingTop={10}
            gap={12}
            // textAlign={}
            text={
              <>
                <p>My mum says I've grown up to be a good girl.</p>
                <p>
                  Every now and then I burn myself so I can feel like a bad
                  girl.
                </p>
              </>
            }
          />
          <ScrollImage
            src={bathroom}
            width={36}
            right={4}
            bottom={18}
            heightReveal={imgReveal(560)}
          />
          <Text
            width={36}
            right={4}
            bottom={18}
            maxHeight={51.75}
            heightReveal={imgReveal(615)}
            color="#0e2b325c"
            paddingTop={0}
            gap={5}
            text={
              <>
                <p>
                  I have fantasies of <br />
                  someone coming in <br />
                  and having their way with me.{" "}
                </p>
                <p>I know.</p>
                <p>Itʼs sick.</p>
              </>
            }
          />
          <ScrollImage
            src={rope}
            width={36}
            right={34}
            bottom={2}
            heightReveal={imgReveal(670)}
          />
          <Text
            width={36}
            right={34}
            bottom={2}
            maxHeight={95}
            heightReveal={imgReveal(770)}
            color="#ff008c14"
            paddingTop={2}
            gap={63}
            text={
              <>
                <p>The little man in the canoe was surprisingly ecstatic.</p>
                <p>Iʼm sure he wouldnʼt have been if it wasnʼt an accident.</p>
              </>
            }
          />
          <ScrollImage
            src={banana}
            width={31}
            left={46}
            bottom={1}
            heightReveal={imgReveal(872)}
          />
          <Text
            width={31}
            left={46}
            bottom={1}
            maxHeight={57}
            heightReveal={imgReveal(929)}
            color="#4b421469"
            // paddingTop={}
            gap={0}
            text={
              <>
                <p>
                  I remember they showed us an animated video with a banana and
                  a flower,{" "}
                </p>
                <p>for male and female genitals respectively,</p>
                <p>to show us how married people have sex.</p>
              </>
            }
          />
          <ScrollImage
            src={washingMachine}
            width={51}
            left={46}
            bottom={5}
            heightReveal={imgReveal(990)}
          />
          <Text
            width={51}
            left={46}
            bottom={5}
            maxHeight={73.2}
            heightReveal={imgReveal(1065)}
            color="#2b24024d"
            paddingTop={50}
            // textAlign={"center"}
            text={
              <>
                <p>
                  I used to hang around at the laundrette because my friends
                  told me it was a good place to meet responsible single men.
                </p>
              </>
            }
          />
          <ScrollImage
            src={blood}
            width={29}
            left={0}
            bottom={1}
            heightReveal={imgReveal(1145)}
          />
          <Text
            width={29}
            left={0}
            bottom={1}
            maxHeight={81.2}
            heightReveal={imgReveal(1230)}
            color="#3111114a"
            paddingTop={6}
            // textAlign={"center"}
            text={
              <>
                <p>
                  When I was a teenager, I was told only sluts shake their
                  bottoms for men when they walk.{" "}
                </p>
                <p> So I carved "slut" on my nethers and slit my wrists.</p>
                <p>
                  {" "}
                  I feel powerful knowing that the only person who can hurt me
                  now, is me.
                </p>
              </>
            }
          />
          <ScrollImage
            src={office}
            width={31}
            left={0}
            bottom={34}
            heightReveal={imgReveal(1325)}
          />
          <Text
            width={31}
            left={0}
            bottom={34}
            maxHeight={55.1}
            heightReveal={imgReveal(1385)}
            color="#270a157d"
            paddingTop={6}
            // textAlign={"center"}
            text={
              <>
                <p>Nothing seemed to work,</p>
                <p> I really had become useless and invisible.</p>
              </>
            }
          />
          <ScrollImage
            src={sink}
            width={39.4}
            right={0}
            bottom={1.1}
            heightReveal={imgReveal(1435)}
          />
          <Text
            width={39.4}
            right={0}
            bottom={1.1}
            maxHeight={98.8}
            heightReveal={imgReveal(1547)}
            color="#2622166e"
            paddingTop={45}
            textAlign={"center"}
            text={
              <>
                <p>
                  After holding on for so long, letting go really sets <br />
                  you free.
                </p>
              </>
            }
          />
          <ScrollImage
            src={bed}
            width={40}
            right={0}
            bottom={25}
            heightReveal={imgReveal(1650)}
          />
          <Text
            width={40}
            right={0}
            bottom={25}
            maxHeight={50.3}
            heightReveal={imgReveal(1702)}
            color="#27200c5c"
            paddingTop={42}
            // textAlign={"center"}
            text={
              <>
                <p>
                  It doesnʼt have the same feeling of vulnerability that comes
                  with being penetrated.
                </p>
              </>
            }
          />
          <ScrollImage
            src={cooking}
            width={60}
            left={0}
            bottom={8}
            heightReveal={imgReveal(1755)}
          />
          <Text
            width={60}
            left={0}
            bottom={8}
            maxHeight={85.95}
            heightReveal={imgReveal(1843)}
            color="#2c32342b"
            paddingTop={25}
            textAlign={"center"}
            text={
              <>
                <p>Itʼs completely natural, if not normal.</p>
              </>
            }
          />
          <ScrollImage
            src={train}
            width={70}
            left={15}
            bottom={0}
            heightReveal={imgReveal(1935)}
          />
          <Text
            width={70}
            left={15}
            bottom={0}
            maxHeight={100}
            heightReveal={imgReveal(2040)}
            color="#30020442"
            paddingTop={28}
            textAlign={"center"}
            text={
              <>
                <p>Why would the police stop me?</p>
                {/* <p>Men roam around without their shirts all the time</p>
                <p>and my breasts are magnificent.</p> */}
              </>
            }
          />
          <Text
            width={70}
            left={15}
            bottom={0}
            maxHeight={100}
            heightReveal={imgReveal(2140)}
            color="transparent"
            paddingTop={15}
            textAlign={"center"}
            text={
              <>
                {/* <p>Why would the police stop me?</p> */}
                <p>Men roam around without their shirts all the time</p>
                {/* <p>and my breasts are magnificent.</p> */}
              </>
            }
          />
          <Text
            width={70}
            left={15}
            bottom={0}
            maxHeight={100}
            heightReveal={imgReveal(2240)}
            color="transparent"
            paddingTop={20}
            textAlign={"center"}
            text={
              <>
                {/* <p>Why would the police stop me?</p> */}
                {/* <p>Men roam around without their shirts all the time</p> */}
                <p>and my breasts are magnificent.</p>
              </>
            }
          />
          <ScrollImage
            src={shower}
            // width={46.25}
            width={42}
            right={0}
            bottom={0}
            heightReveal={imgReveal(2345)}
          />
          <Text
            width={42}
            right={0}
            bottom={0}
            maxHeight={90.8}
            heightReveal={imgReveal(2445)}
            color="#5a4a4569"
            paddingTop={20}
            textAlign={"center"}
            text={
              <>
                <p>These magazines.</p>
                <p>Theyʼre always telling you itʼs all about the exterior.</p>
              </>
            }
          />
          <ScrollImage
            src={bike}
            width={30}
            left={0}
            bottom={13.5}
            heightReveal={imgReveal(2540)}
          />
          <Text
            width={30}
            left={0}
            bottom={13.5}
            maxHeight={75.5}
            heightReveal={imgReveal(2610)}
            color="#01200d63"
            paddingTop={20}
            textAlign={"center"}
            text={
              <>
                <p>Of course I don't wear sexy underwear.</p>
              </>
            }
          />
        </KKContainer>
        <KKScroller
          onScroll={handleScroll}
          id="kkScroller"
          style={{ fontSize: `${fontSize}px`, maxHeight: "3000%" }}
        >
          <Spacer height="3000%" />
        </KKScroller>
      </AspectRatioWrapper>
    </>
  );
}

export default KillingKittens;
