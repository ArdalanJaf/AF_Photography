import styled from "styled-components";

const StyledText = styled.div`
  /* background-color: transparent; */
  /* background-color: lightcoral; */
  position: absolute;
  overflow: hidden;
  /* top: 45%;
  left: 20%; */
  /* z-index: 1; */
  /* width: 15%; */
  /* height: fit-content; */
  /* width: fit-content; */
  /* padding: 5%; */
  /* overflow: hidden; */
  /* display: flex;
  justify-content: center; */
  /* align-items: center; */

  p {
    color: white;
    display: block;
    position: absolute;
    top: 0;
    height: 40%;
    width: 90%;
    margin: auto;
    /* padding: 5%; */
    /* padding: 1% 1%; */
    line-height: 135%;
    font-family: "roboto mono";
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
function Text({
  text,
  left,
  top,
  bottom,
  right,
  color,
  width,
  heightReveal,
  maxHeight,
}) {
  return (
    <StyledText
      style={{
        maxHeight: `${maxHeight}%`,
        height: `${heightReveal}%`,
        width: `${width}%`,
        top: `${top}%`,
        bottom: `${bottom}%`,
        left: `${left}%`,
        right: `${right}%`,
        backgroundColor: `${color}`,
      }}
    >
      {/* <p>
        {text.map((textOrHTML, index) => (
          <span key={index}>{textOrHTML}</span>
        ))}
      </p> */}
      {text}
    </StyledText>
  );
}

export default Text;
