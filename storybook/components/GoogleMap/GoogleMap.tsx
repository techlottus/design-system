import React from "react";
import { GoogleMapType } from "../Types/GoogleMap.types";

const GoogleMap: React.FC<GoogleMapType> = (props: GoogleMapType) => {
  const { className = "", title = "", Id } = props;


  return (
    <iframe
      className={className}
      src={"https://www.google.com/maps/embed?" + Id}
      title={title}
      allow="">
    </iframe>
  );
};

export default GoogleMap;
