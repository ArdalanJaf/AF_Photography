import styled from "styled-components";

const StyledText = styled.div`
  /* background-color: transparent; */
  /* background-color: lightcoral; */
  position: absolute;
  /* top: 45%;
  left: 20%; */
  /* z-index: 1; */
  /* width: 15%; */
  height: fit-content;
  width: fit-content;
  p {
    line-height: 135%;
    /* background-color: rgbs(0, 0, 0, 0.5); */
    font-family: "roboto mono";
    padding: 1% 1%;
    /* background-color: #ff000085; */
    color: white;
    border-radius: 5px;
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
function Text({ text, left, top, bottom, right, color }) {
  return (
    <StyledText
      style={{
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
