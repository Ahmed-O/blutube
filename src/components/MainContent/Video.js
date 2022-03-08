import React from "react";

function Video({ thumbnail, videoTitle, channelTitle, channelViews }) {
  return (
    <div className="Video">
      <img src={thumbnail} alt={videoTitle} />
      <div className="vid-info">
        <h3>{videoTitle}</h3>
        <h5>{channelTitle}</h5>
        <h5>{channelViews} views</h5>
      </div>
    </div>
  );
}

export default Video;
