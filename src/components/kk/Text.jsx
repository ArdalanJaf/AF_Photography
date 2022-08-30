import styled from "styled-components";

const StyledText = styled.div`
  position: absolute;

  div {
    padding: 5%;
    /* display: flex;
    flex-direction: column; */
    /* justify-content: center; */
    /* align-items: stretch; */
  }

  p {
    /* padding: 5%; */
    line-height: 135%;
    /* background-color: rgbs(0, 0, 0, 0.5); */
    font-family: "roboto mono";
    /* padding: 1% 1%; */
    /* background-color: #ff000085; */
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
      <div style={{ gap: `${gap}%`, height: `${maxHeight}%` }}>{text}</div>
    </StyledText>
  );
}

export default Text;
