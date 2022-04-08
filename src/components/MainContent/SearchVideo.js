import React from "react";

function SearchVideo({ id, videoTitle, channelTitle, description }) {
  let vidSrc = "https://youtube.com/embed/" + id;
  return (
    <div className="Video">
      <iframe
        src={vidSrc}
        frameBorder="0"
        width="100%"
        height="200px"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="vid-info">
        <h3>{videoTitle}</h3>
        <h5>{channelTitle}</h5>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default SearchVideo;
