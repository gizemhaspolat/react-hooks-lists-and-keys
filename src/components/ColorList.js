import React from "react";

function ColorList() {
  const colors = [
    "firebrick",
    "rebeccapurple",
    "salmon",
    "darkslategray",
    "hotpink",
  ];

  function ColorItem(props) {
    return <li style={{ color: props.color }}>{props.color}</li>;
  }

  const colorElements = colors.map((color) => {
    return <ColorItem key={color} color={color} />;
  });
}

export default ColorList;
