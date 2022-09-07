import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledActiveContentForm from "./ActiveContentForm.style";
import DeleteButton from "./DeleteButton";
import {
  setTitle,
  setImageLink,
  delImageLink,
  addImageLink,
  upImageLink,
  downImageLink,
  setFormat,
  prepForSave,
  resetReadyToPublish,
  saveToLibrary,
  setHide,
  resetActive,
  delContent,
} from "../../redux/contentSlice";

function ActiveContentForm() {
  const dispatch = useDispatch();
  const { active, activeUtil } = useSelector((state) => state.content);
  const { title, imageLinks, format } = active;

  useEffect(() => {
    // console.log(activeUtil.readyToPublish);
    if (activeUtil.readyToPublish) {
      console.log("Send to DB", active);

      // update local db
      dispatch(saveToLibrary(active));

      // clean up
      dispatch(resetReadyToPublish());
    }
  }, [activeUtil.readyToPublish]);

  return (
    <StyledActiveContentForm>
      <label>
        Title:
        <br />
        <input
          value={title}
          onInput={(e) => dispatch(setTitle(e.target.value))}
        />
      </label>

      <ul>
        <li> Image links:</li>
        {imageLinks.map((iL, index) => (
          <li key={index}>
            <input
              value={iL}
              onInput={(e) =>
                dispatch(setImageLink({ index, value: e.target.value }))
              }
            />

            <button
              onClick={() => dispatch(downImageLink(index))}
              disabled={index < imageLinks.length - 1 ? false : true}
            >
              &#9660;
            </button>
            <button
              onClick={() => dispatch(upImageLink(index))}
              disabled={index > 0 ? false : true}
            >
              &#9650;
            </button>
            <DeleteButton onClick={() => dispatch(delImageLink(index))} />
          </li>
        ))}
        <li>
          <button
            className="addImgLink"
            onClick={() => dispatch(addImageLink())}
          >
            Add Image Link
          </button>
        </li>
      </ul>

      <label>
        <input
          type="radio"
          name="format"
          value={0}
          checked={format === 0 ? true : false}
          onChange={() => dispatch(setFormat(0))}
        />
        Slideshow
      </label>
      {"  "}
      <label>
        <input
          type="radio"
          name="format"
          value={1}
          checked={format === 1 ? true : false}
          onChange={() => dispatch(setFormat(1))}
        />
        Carasol
      </label>

      {/* <label>
        <input
          type="checkbox"
          value={true}
          checked={active.hide}
          onChange={() => dispatch(setHide(!active.hide))}
        />
        Hide
      </label> */}

      <button
        className="submit"
        onClick={() => {
          dispatch(prepForSave());
        }}
      >
        SAVE
      </button>

      <button
        disabled={!active.id && true}
        onClick={() => {
          dispatch(delContent(active.id));
          dispatch(resetActive());
        }}
      >
        DELETE
      </button>
    </StyledActiveContentForm>
  );
}

export default ActiveContentForm;
