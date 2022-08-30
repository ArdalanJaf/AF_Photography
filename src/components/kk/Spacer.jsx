import styled from "styled-components";

const StyledSpacer = styled.div`
  width: fit-content;
  background-color: transparent;
  width: 100%;
`;

function Spacer(props) {
  const { height } = props;

  return <StyledSpacer className="Spacer" style={{ height: height }} />;
}

export default Spacer;
