import React from "react";
import millify from "millify";

function Video({ id, thumbnail, videoTitle, channelTitle, channelViews }) {
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
        <h3>{videoTitle.replace("&#39;", "'").replace("&amp;", "&")}</h3>
        <h5>{channelTitle}</h5>
        <h5>{millify(channelViews)} views</h5>
      </div>
    </div>
  );
}

export default Video;
