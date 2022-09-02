import React from "react";

function ExistingContent() {
  let data = [
    { title: "a", imageLinks: ["1", "2", "3"] },
    { title: "b", imageLinks: ["1", "2", "3", "4"] },
    { title: "c", imageLinks: ["1", "2"] },
  ];

  function loadContent(index) {
    console.log(data[index]);
  }
  return (
    <div>
      <ul>
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
