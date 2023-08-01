// Bubble.js

import React from "react";

const Bubble = ({ x, y, url }) => {

  const divStyle = {
    position: "absolute",
    top: `${y}px`,
    left: `${x}px`,
    transform: "translate(-50%, -50%)",
    width: "300px",
    height: "300px",
    backgroundImage: `url(${url})`,
    borderRadius: "50%",
    textAlign: "center",
    lineHeight: "100px"
  };

  return (
    <div style={divStyle}></div>
  );
};

export default Bubble;
