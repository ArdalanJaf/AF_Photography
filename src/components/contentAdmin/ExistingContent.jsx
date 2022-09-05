import React from "react";

function ExistingContent() {
  let data = [
    { title: "a", imageLinks: ["1", "2", "3"] },
    { title: "b", imageLinks: ["1", "2", "3", "4"] },
    { title: "c", imageLinks: ["1", "2"] },
  ];

  function loadContent(index) {
    console.log(data[index]);
    // on componentLoad get data from back. Store in state
    // but data needs to get downloaded on siteLoad anyway, so is already here...
    // so get data on siteLoad, store in state.
    // when new data is inserted: change DB & re-download data, OR change in DB & state (only once DB changed)

    // select Data to edit = get data from state.
    // on submit change = change in state & change in DB (don't want to re-download all data)

    // or Query every time? on contentLoad = query DB for content... on adminContentList load = query DB
  }
  return (
    <div>
      <ul>
        <li>NEW CONTENT BUTTON</li>
        {data.map((content, i) => (
          <li key={i} onClick={() => loadContent(i)}>
            title: {content.title}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ExistingContent;

// display all content (index, title, entry date, last edited, format?)
// load content into active form
// delete content Entry -> confirm
// move up/down (changes index in state)
// hide/show
// SAVE? (send whole content array too DB)

// NEW button

// onClick => setActiveContent to selectedContent... (with new key: new? f/t    and index: #)
//      in activeContent onSubmit => !new ? edit existing entry (using index) : add new entry to top of contentArray
//
// OR
// onClick => instead of using active, use content[index] (prop for newContentForm, active(new) OR )
