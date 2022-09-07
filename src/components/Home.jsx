import React from "react";

function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <div
        style={{ height: "300px", width: "200px", backgroundColor: "blue" }}
      ></div>
      <div
        style={{
          height: "300px",
          width: "200px",
          backgroundColor: "yellow",
          position: "absolute",
          right: "500px",
          bottom: "550px",
        }}
      ></div>
      <h1 style={{ textAlign: "center", marginTop: "-100px" }}>
        ANDREAS COOL WEBSITE HERE
      </h1>
      <h1 style={{ textAlign: "center", marginTop: "200px" }}>content</h1>
    </div>
  );
}

export default Home;
