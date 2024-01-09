import React from "react";
import { VimeoType } from "../Types/Vimeo.types";

const Vimeo: React.FC<VimeoType> = (props: VimeoType) => {
  const { className = "", title = "", Id } = props;


  return (
    <iframe
      className={className}
      src={"https://player.vimeo.com/video/" + Id}
      title={title}
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share "
      allowFullScreen>
    </iframe>
  );
};

export default Vimeo;
