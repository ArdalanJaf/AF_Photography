import React from "react";
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
  cleanImageLinks,
} from "../../redux/contentSlice";

function NewContentForm() {
  const dispatch = useDispatch();
  const active = useSelector((state) => state.content.active);
  const { title, imageLinks } = active;

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

      <button onClick={() => dispatch(addImageLink())}>Add Image Link</button>

      <button
        onClick={() => {
          dispatch(cleanImageLinks());
          dispatch(setTimeStamp());
          // send to backEnd to be stored in database.
          // exisiting content: ask back to retrieve from database
          console.log("SEND DATA", active); // add to index 0 of existing content
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
