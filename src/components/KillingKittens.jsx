import React from "react";
import { useSelector } from "react-redux";

function KillingKittens() {
  const scrollPosition = useSelector((state) => state.scrollPosition);

  return (
    <div style={{ position: "fixed", top: "50%" }}>
      Hello {scrollPosition.current}
    </div>
  );
}

export default KillingKittens;
