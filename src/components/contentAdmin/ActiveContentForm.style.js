import styled from "styled-components";

const StyledActiveContentForm = styled.div`
  background-color: #fff;
  border: 1px green dotted;
  /* height: 100%; */
  max-width: 50%;
  padding: 1em;

  /* overflow: scroll; */

  ul {
    list-style: none;
    padding-left: 0;

    li {
      text-indent: 0;
      display: flex;
      padding-bottom: 0.2em;
      align-items: center;

      label {
        flex: 1;
        display: flex;
      }
      input {
        flex: 1;
        margin-right: 0.3em;
      }

      button:not(:last-of-type) {
        background: none;
        border: none;
        font-size: 1.4em;
        padding: 0;
      }

      .addImgLink {
        width: 100%;
        padding: 0.5em 0.3em 0.3em;
      }
    }
  }

  input {
    padding: 0.5em 0.3em 0.3em;
  }

  button {
    cursor: pointer;
  }
`;

export default StyledActiveContentForm;
