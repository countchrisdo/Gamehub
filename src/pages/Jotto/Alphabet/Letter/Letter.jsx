import React, { useState } from "react";
import './Letter.css';

export default function Letter({ Letter, Play }) {
  let upper = Letter.toUpperCase();
  let bgColorList = ["lightgray", "lightgreen", "salmon"];
  const [color, setColor] = useState(0);

  const handleClick = () => {
    let newColor = (color + 1) % 3;
    setColor(newColor);
  };

  return (
    <button
      className="letterBtns"
      onClick={handleClick}
      variant="contained"
      style={{ backgroundColor: bgColorList[color] }}
    >
      {upper}
    </button>
  );
}
