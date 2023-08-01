import React from "react";

const Bubble = ({ x, y, number }) => {
    
    const divStyle = {
        position: "absolute",
        top: `${y}px`,
        left: `${x}px`,
        transform: "translate(-50%, -50%)",
        width: "50px",
        height: "50px",
        backgroundColor: "red",
        borderRadius: "50%",
        textAlign: "center",
        lineHeight: "50px"
    }

    return (
        <div style={divStyle}>{number}</div>
    )
}

export default Bubble;