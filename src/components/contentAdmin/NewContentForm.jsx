import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledNewContentForm from "./NewContentForm.style";
import {
  setTitle,
  setImageLink,
  delImageLink,
  addImageLink,
  upImageLink,
  downImageLink,
  setSlideShow,
  setTimeStamp,
} from "../../redux/dynamicContentSlice";

function NewContentForm() {
  const dispatch = useDispatch();
  const activeContent = useSelector((state) => state.dynamicContent.active);
  const { title, imageLinks } = activeContent;

  return (
    <StyledNewContentForm>
      <label>
        Title:{" "}
        <input
          value={title}
          onInput={(e) => dispatch(setTitle(e.target.value))}
        />
      </label>

      <label>
        <input
          type="radio"
          name="format"
          value={true}
          defaultChecked
          onInput={() => dispatch(setSlideShow(true))}
        />{" "}
        Slideshow
      </label>
      <label>
        <input
          type="radio"
          name="format"
          value={false}
          onInput={() => dispatch(setSlideShow(false))}
        />{" "}
        Carasol
      </label>

      <ul>
        {imageLinks.map((iL, index) => (
          <li key={index}>
            <label>
              Image link:
              <input
                value={iL}
                onInput={(e) =>
                  dispatch(setImageLink({ index, value: e.target.value }))
                }
              />
              <button onClick={() => dispatch(delImageLink(index))}>
                delete
              </button>
              <button
                onClick={() => dispatch(upImageLink(index))}
                disabled={index > 0 ? false : true}
              >
                UP
              </button>
              <button
                onClick={() => dispatch(downImageLink(index))}
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
          // setContent({ ...content, imageLinks: [...content.imageLinks, ""] })
          dispatch(addImageLink())
        }
      >
        Add Image Link
      </button>

      <button
        onClick={() => {
          dispatch(setTimeStamp());
          console.log("SEND DATA", activeContent);
        }}
      >
        SUBMIT
      </button>

      <p>{title}</p>
      {imageLinks.map((iL, i) => (
        <p key={i}>{iL}</p>
      ))}
    </StyledNewContentForm>
  );
}

//

export default NewContentForm;
