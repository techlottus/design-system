import React from "react";
import { SpotifyType } from "../Types/Spotify.types";

const Spotify: React.FC<SpotifyType> = (props: SpotifyType) => {
  const { className = "", title = "", Id } = props;


  return (
    <iframe
      className={className}
      src={"https://open.spotify.com/embed/track/" + Id}
      title={title}
      allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
    >
    </iframe>
  );
};

export default Spotify;
