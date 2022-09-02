import styled from "styled-components";

const StyledText = styled.div`
  position: absolute;
  overflow: hidden;

  div {
    /* padding: 5%; */
    display: flex;
    flex-direction: column;
  }

  p {
    padding: 5%;
    line-height: 135%;
    /* background-color: rgbs(0, 0, 0, 0.5); */
    font-family: "roboto mono";
    color: white;
    border-radius: 5px;
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
  gap,
  paddingTop,
  textAlign,
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
      <div
        style={{
          gap: `${gap}%`,
          height: `${maxHeight}%`,
          paddingTop: `${paddingTop}%`,
          textAlign: textAlign,
        }}
      >
        {text}
      </div>
    </StyledText>
  );
}

export default Text;
