import React, { useState } from "react";
import StyledNewContentForm from "./NewContentForm.style";

function NewContentForm() {
  const [content, setContent] = useState({ title: "", imageLinks: [""] });
  const { title, imageLinks } = content;

  const updateTitle = (e) =>
    setContent({ ...content, title: `${e.target.value}` });

  const updateIL = (e, index) => {
    const updatedIL = [...imageLinks];
    updatedIL[index] = e.target.value;
    setContent({ ...content, imageLinks: updatedIL });
  };

  const deleteIL = (index) => {
    const updatedIL = [...imageLinks];
    updatedIL.splice(index, 1);
    setContent({ ...content, imageLinks: updatedIL });
  };

  const moveUpIL = (index) => {
    const updatedIL = [...imageLinks];
    const iL = updatedIL.splice(index, 1)[0];
    updatedIL.splice(index - 1, 0, iL);
    setContent({ ...content, imageLinks: updatedIL });
  };

  const moveDownIL = (index) => {
    const updatedIL = [...imageLinks];
    const iL = updatedIL.splice(index, 1)[0];
    updatedIL.splice(index + 1, 0, iL);
    setContent({ ...content, imageLinks: updatedIL });
  };

  return (
    <StyledNewContentForm>
      <label>
        Title: <input value={title} onInput={(e) => updateTitle(e)} />
      </label>

      <label>
        <input type="radio" name="content type" /> Slideshow
      </label>
      <label>
        <input type="radio" name="content type" /> Carasol
      </label>

      <ul>
        {imageLinks.map((iL, index) => (
          <li key={index}>
            <label>
              Image link:
              <input
                value={imageLinks[index]}
                onInput={(e) => updateIL(e, index)}
              />
              <button onClick={() => deleteIL(index)}>delete</button>
              <button
                onClick={() => moveUpIL(index)}
                disabled={index > 0 ? false : true}
              >
                UP
              </button>
              <button
                onClick={() => moveDownIL(index)}
                disabled={index < imageLinks.length - 1 ? false : true}
              >
                DOWN
              </button>
            </label>
          </li>
        ))}
      </ul>

      <button
        onClick={() =>
          setContent({ ...content, imageLinks: [...content.imageLinks, ""] })
        }
      >
        Add Image Link
      </button>

      <button onClick={() => console.log("SEND DATA", content)}>SUBMIT</button>

      <p>{content.title}</p>
      {content.imageLinks.map((iL, i) => (
        <p key={i}>{iL}</p>
      ))}
    </StyledNewContentForm>
  );
}

//

export default NewContentForm;
