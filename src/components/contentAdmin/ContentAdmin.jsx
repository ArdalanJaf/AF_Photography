import React from "react";
import ActiveContentForm from "./ActiveContentForm";
import DynamicContent from "./DynamicContent";
import ExistingContent from "./ExistingContent";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";

function ContentAdmin() {
  const active = useSelector((state) => state.content.active);

  return (
    <StyledContentAdmin>
      <div>
        <ActiveContentForm />
        <ExistingContent />
      </div>
      <h2>Preview:</h2>
      <DynamicContent content={active} />
    </StyledContentAdmin>
  );
}

export default ContentAdmin;

const StyledContentAdmin = styled.div`
  & > div:first-of-type {
    display: flex;
    flex-wrap: wrap;
    & > div {
      flex: 1;
    }
  }
`;
