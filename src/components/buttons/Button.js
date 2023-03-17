import React from "react";

const Button = ({ children, style }) => {
  return (
    <button
      style={{
        width: "157px",
        color: "black",
        backgroundColor: "#c9c6c6",
        fontSize: "14px",
        fontWeight: "600",
        border: "none",
        borderRadius: "4px",
        height: "32px",
        cursor: "pointer",
        ...style,
      }}
    >
      {children}
    </button>
  );
};

export default Button;
