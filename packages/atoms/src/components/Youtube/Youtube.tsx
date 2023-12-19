import React from "react";
import { YoutubeType } from "../Types/Youtube.types";

const Youtube: React.FC<YoutubeType> = (props: YoutubeType) => {
  const { className = "", title = "", Id } = props;


  return (
    <iframe
      className={className}
      src={"https://www.youtube.com/embed/" + Id}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowFullScreen>
    </iframe>
  );
};

export default Youtube;
