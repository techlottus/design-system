import { useState } from "react";


export const [clicked, setClicked] = useState(0);

export const handleToggle = (index: number) => {
  if (clicked === index) {
    setClicked(0);
  }
  setClicked(index);
  return clicked;
};