import React, { Component } from "react";
import "./index.css";
export const SpacesFoundations = ({ spaces }) => {

  return <div className="spaces">
    {spaces.map((space, key) => (
      <div className="spaces__wrapper">
        <div className="spaces__content">
          <p className="key">{key}</p>
          <p className="space">{space}</p>
        </div>
        <div className="spaces__space"></div>
      </div>
    ))}
  </div>

}
