import React from "react";
import TrashIcon from "../icons/TrashIcon";
import styled from "styled-components";

const StyledDelBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  height: 25px;
`;

function DeleteButton({ onClick }) {
  return (
    <StyledDelBtn onClick={onClick}>
      <TrashIcon />
    </StyledDelBtn>
  );
}

export default DeleteButton;
