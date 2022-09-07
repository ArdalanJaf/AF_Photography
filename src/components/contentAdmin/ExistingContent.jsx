import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setActive, resetActive } from "../../redux/contentSlice";
import { getDate } from "../../utils";
import DeleteButton from "./DeleteButton";

function ExistingContent() {
  const library = useSelector((state) => state.content.library);
  const dispatch = useDispatch();

  return (
    <div>
      <ul>
        <li>
          <button onClick={() => dispatch(resetActive())}>New Content</button>
        </li>
        {library.map((content, i) => (
          <li key={i} onClick={() => dispatch(setActive(i))}>
            {content.title},{" "}
            {getDate(content.updateTimestamp || content.entryTimestamp)}
            {/* <DeleteButton onClick={null} /> */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExistingContent;
