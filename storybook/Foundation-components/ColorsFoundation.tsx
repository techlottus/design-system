import React, { Component } from "react";
import { ColorsGrid } from "./ColorsGrid.tsx";
import "./index.css";
export const ColorsFoundation = ({ colors }) => {

  const getRootColors = () => {
    let rootColors = {}
    for (let key in colors) {
      if (!isObject(colors[key])) {
        rootColors[key] = colors[key]
      }
    }
    return rootColors
  }

  const isObject = (obj) => {
    return obj && typeof obj === 'object'
  }

  return <div className="colors-container">
    {colors.map((color: string, key: string) => (
      <div>
        <div>
          <ColorsGrid colors={color} title={key}></ColorsGrid>
        </div>
      </div>
    ))}
    <ColorsGrid
      colors={getRootColors()}
      title="Root Colors"
      use-default-background-color={true}
    ></ColorsGrid>
  </div>

}


// @media only screen and (min-width: 1024px) {
//   .colors-container {
//     max-width: 1000px;
//   }
// }