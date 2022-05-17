import React, { useState } from "react";

export default function Thumbnail({ media }) {
  console.log(media);
  const [src, setSrc] = useState();
  if (media.media.length > 0) {
    console.log(media.media);
    return (
      <div>
        <img
          src={media.media[0]["media-metadata"][2]["url"]}
          alt={media.media[0].caption}
        />
        <p style={{ fontSize: "small" }}> {media.media[0].caption}</p>
      </div>
    );
  }
}
