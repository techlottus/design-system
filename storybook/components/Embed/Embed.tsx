import React from "react";
import { EmbedType } from "../Types/Embed.types";

const Embed: React.FC<EmbedType> = (props: EmbedType) => {
  const { className = "", title = "", srcFilter, srcId, allow, allowFullScreen = true } = props;


  return (
    <iframe
      className={className}
      src={srcFilter + srcId}
      title={title}
      allow={allow}
      allowFullScreen={allowFullScreen}>
    </iframe>
  );
};

export default Embed;
