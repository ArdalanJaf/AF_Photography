import styled from "styled-components";

const StyledInitialImage = styled.div`
  height: 100%;
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  background-repeat: no-repeat;
  background-attachment: local;
`;

function InitialImage({ img, size }) {
  return (
    <StyledInitialImage
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: `auto ${size || "100%"}`,
      }}
    />
  );
}

export default InitialImage;
