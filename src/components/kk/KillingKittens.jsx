import React, { useState, useEffect } from "react";
import AspectRatioWrapper from "./AspectRatioWrapper.styles";
import KKContainer from "./KKContainer.styles";
import KKScroller from "./KKScroller.style";
import ScrollImage from "./ScrollImage";
import StaticImage from "./StaticImage";
import Spacer from "./Spacer";
import Text from "./Text";
// images
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
  const [fontSize, setFontSize] = useState("10px");

  const handleScroll = () => {
    let fromTop = document.getElementById("kkScroller").scrollTop; // height scrolled from top of container
    let maxHeight = document.getElementById("kkScroller").offsetHeight; // total height of container
    let percentage = (fromTop / maxHeight) * 100;
    setScrollPosition(percentage);
  };

  function imgReveal(startReveal) {
    return scrollPosition > startReveal - 1 ? scrollPosition - startReveal : 0;
  }

  function getDynamicFontSize() {
    let maxWidth = document.getElementById("kkScroller").offsetWidth;
    setFontSize(maxWidth / 50);
  }

  useEffect(() => {
    getDynamicFontSize();
    window.addEventListener("resize", getDynamicFontSize);
    return () => window.removeEventListener("resize", getDynamicFontSize);
  }, []);

  return (
    <>
      <div style={{ position: "fixed", top: "0%", left: "50%" }}>
        Hello {}px, {scrollPosition}%
      </div>

      <AspectRatioWrapper>
        <KKContainer style={{ fontSize: `${fontSize}px` }}>
          <StaticImage src={upskirt} width={64} top={0} left={0} />
          <Text
            width={64}
            bottom={8}
            left={0}
            heightReveal={imgReveal(0)}
            maxHeight={92}
            color="#85998880"
            // text-shadow: -1px -1px #45ff00;
            gap={50}
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
            color="#85998880"
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
            heightReveal={imgReveal(180)} //where to reveal
          />
          <Text
            width={30}
            bottom={5}
            left={2}
            heightReveal={imgReveal(237)}
            maxHeight={57.8}
            color="#85998880"
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
            heightReveal={imgReveal(250)} //where to reveal
          />
          <ScrollImage
            src={bathroom}
            width={36}
            right={4}
            bottom={18}
            heightReveal={imgReveal(395)}
          />
          <ScrollImage
            src={rope}
            width={36}
            right={34}
            bottom={2}
            heightReveal={imgReveal(440)}
          />
          <ScrollImage
            src={banana}
            width={31}
            left={46}
            bottom={1}
            heightReveal={imgReveal(623)}
          />
          <ScrollImage
            src={washingMachine}
            width={51}
            left={46}
            bottom={5}
            heightReveal={imgReveal(784)}
          />
          <ScrollImage
            src={blood}
            width={29}
            left={0}
            bottom={1}
            heightReveal={imgReveal(900)}
          />
          <ScrollImage
            src={office}
            width={31}
            left={0}
            bottom={34}
            heightReveal={imgReveal(1130)}
          />
          <ScrollImage
            src={sink}
            width={39.4}
            right={0}
            bottom={1.1}
            heightReveal={imgReveal(1225)}
          />
          <ScrollImage
            src={bed}
            width={40}
            right={0}
            bottom={25}
            heightReveal={imgReveal(1355)}
          />
          <ScrollImage
            src={cooking}
            width={60}
            left={0}
            bottom={8}
            heightReveal={imgReveal(1402)}
          />
          <ScrollImage
            src={train}
            width={70}
            left={15}
            bottom={0}
            heightReveal={imgReveal(1510)}
          />
          <ScrollImage
            src={shower}
            // width={46.25}
            width={42}
            right={0}
            bottom={0}
            heightReveal={imgReveal(1640)}
          />
          <ScrollImage
            src={bike}
            width={30}
            left={0}
            bottom={13.5}
            heightReveal={imgReveal(1715)}
          />
        </KKContainer>
        <KKScroller
          onScroll={handleScroll}
          id="kkScroller"
          style={{ fontSize: `${fontSize}px`, maxHeight: "1733%" }}
        >
          <Spacer height="2538%" />
        </KKScroller>
      </AspectRatioWrapper>
    </>
  );
}

export default KillingKittens;

{
  /* <Text
            top={100}
            left={65}
            color="red"
            text={
              <p>
                Sometimes I've <br />
                noticed men trying <br />
                to look up my skirt.
              </p>
            }
          />
          <Text
            top={145}
            left={65}
            color="red"
            text={
              <p>
                That just makes <br /> me laugh.
              </p>
            }
          />
          <Text
            top={195}
            left={19}
            color="blue"
            text={
              <p>
                For the record <br />I have no interest <br />
                in being caught <br />
                or having anyone <br /> see me.
              </p>
            }
          />
          <Text
            top={275}
            left={33}
            color="#9716196b"
            text={
              <p>
                Have you ever served dessert to your guests and then got
                offended when they told you it smelled weird?
              </p>
            }
          />
          <Text
            top={275}
            left={33}
            color="#9716196b"
            text={
              <p>
                Have you ever <br />
                served dessert to <br />
                your guests...
              </p>
            }
          />
          <Text
            top={310}
            left={50}
            color="#9716196b"
            text={
              <p>
                and then got <br />
                offended when <br />
                they told you <br />
                it smelled weird?
              </p>
            }
          />
          <Text
            top={345}
            left={67}
            color="#9716196b"
            text={
              <p>
                My mum says <br />
                I've got to be <br />a good girl.
              </p>
            }
          />

          <Text
            top={380}
            left={32.6}
            color="#9716196b"
            text={
              <p>
                My mum says I've got to be a good girl.
                <br />
                Every now and then I burn myself so I can feel like a bad girl.
              </p>
            }
          /> */
}
{
  /* <Text
            top={380}
            left={32.6}
            color="#9716196b"
            text={
              <p>
                Every now and then
                <br />
                I burn myself
                <br /> so I can feel <br /> like a bad girl.
              </p>
            }
          /> */
}
{
  /* <Text
            top={475}
            left={55}
            color="blue"
            text={
              <p>
                I have fantasies of <br />
                someone coming in <br />
                and having their <br />
                way with me.
              </p>
            }
          />
          <Text
            top={540}
            left={58}
            color="blue"
            text={
              <p>
                I know. <br /> It's sick.
              </p>
            }
          />
          <Text
            top={580}
            left={31}
            color="orange"
            text={
              <p>
                The little man <br /> in the canoe <br /> was surprisingly{" "}
                <br />
                ecstatic.
              </p>
            }
          />
          <Text
            top={636}
            left={48}
            color="orange"
            text={
              <p>
                I'm sure he <br />
                wouldn't have been <br />
                if it wasn't an <br />
                accident.
              </p>
            }
          />
          <Text
            top={765}
            left={62}
            color="red"
            text={
              <p>
                I remember
                <br />
                they showed us <br />
                an animated <br />
                video with a <br />
                banana and
                <br />a flower...
              </p>
            }
          />
          <Text
            top={815}
            left={62}
            color="red"
            text={
              <p>
                for male and
                <br />
                female genitals <br />
                respectively, <br />
              </p>
            }
          />
          <Text
            top={850}
            left={62}
            color="red"
            text={
              <p>
                to show us how
                <br />
                married people <br />
                have sex. <br />
              </p>
            }
          />
          <Text
            top={918}
            left={35}
            color="lime"
            text={<p>I used to hang around at the laundrette...</p>}
          />
          <Text
            top={960}
            left={60}
            color="lime"
            text={
              <p>
                because my friends told me <br /> it was a good place to meet{" "}
                <br /> responsible single men.
              </p>
            }
          />
          <Text
            top={1030}
            left={35}
            color="red"
            text={
              <p>
                When I was a <br /> teenager, I was told <br /> only sluts shake
                <br /> their bottoms for <br />
                men when they
                <br /> walk.
              </p>
            }
          />
          <Text
            top={1065}
            left={35}
            color="red"
            text={
              <p>
                So I carved "slut" on <br /> my nethers and slit <br /> my
                wrists.
              </p>
            }
          />
          <Text
            top={1135}
            left={35}
            color="red"
            text={
              <p>
                I feel powerful <br /> knowing that the <br /> only person who{" "}
                <br /> can hurt me now <br /> is me.
              </p>
            }
          />
          <Text
            top={1255}
            left={40}
            color="white"
            text={
              <p>
                Nothing seemed to work, <br /> I really had become <br />{" "}
                useless and invisible.
              </p>
            }
          />
          <Text
            top={1328}
            left={63.1}
            color="white"
            text={
              <p>
                After holding on for so long, <br /> letting fo really sets you
                free.
              </p>
            }
          />
          <Text
            top={1395}
            left={38}
            color="orange"
            text={
              <p>
                It doesn't have the same <br /> feeling of vulnerability...
              </p>
            }
          />
          <Text
            top={1426}
            left={59}
            color="orange"
            text={
              <p>
                that comes with
                <br /> being penetrated.
              </p>
            }
          />
          <Text
            top={1533}
            left={36}
            color="white"
            text={<p>It's completely natural, if not normal.</p>}
          />
          <Text
            top={1602}
            left={35}
            color="white"
            text={<p>Why would the police stop me?</p>}
          />
          <Text
            top={1637}
            left={27}
            color="white"
            text={<p>Men roam around without their shirts all the time</p>}
          />
          <Text
            top={1657}
            left={35}
            color="white"
            text={<p>and my breasts are magnificent.</p>}
          />
          <Text
            top={1715}
            left={20}
            color="white"
            text={<p>These magazines.</p>}
          />
          <Text
            top={1730}
            left={20}
            color="white"
            text={
              <p>
                They're always telling you it's all <br />
                about the exterior.
              </p>
            }
          />
          <Text
            top={1783}
            left={37}
            color="white"
            text={<p>Of course I don't wear sexy underwear.</p>}
          /> */
}
