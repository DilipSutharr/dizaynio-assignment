import React from "react";

const Audio = ({ src }) => {
  return (
    <audio controls className="my-4">
      <source src={src} type="audio/mp3" />
      Your browser does not support the audio tag.
    </audio>
  );
};

export default Audio;
