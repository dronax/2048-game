import React from "react";
import "./style.css";
const Block = ({ num }) => {
  return (
    <div
      className="block"
      style={{ color: num === 2 || num === 4 ? "#645B52" : "#F7F4EF" }}
    >
    {num}
    </div>
  );
};

export default Block;
