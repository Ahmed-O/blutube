import React from "react";

function SearchVideo({ id, videoTitle, channelTitle, description }) {
  let vidSrc = "https://youtube.com/embed/" + id;

  return (
    <div className="SearchVideo">
      <iframe
        src={vidSrc}
        frameBorder="0"
        width="300px"
        height="200px"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="vid-info">
        <h3>{videoTitle.replace("&#39;", "'").replace("&amp;", "&")}</h3>
        <h5>{channelTitle}</h5>
        <h5>{description}</h5>
      </div>
    </div>
  );
}

export default SearchVideo;
