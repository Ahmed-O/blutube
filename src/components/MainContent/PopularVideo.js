import React from "react";
import ReactPlayer from "react-player";

function Video({ id, thumbnail, videoTitle, channelTitle, channelViews }) {
  let vidSrc = "https://youtube.com/embed/" + id;
  return (
    <div className="Video">
      {/* <img src={thumbnail} alt={videoTitle} /> */}
      {/* <ReactPlayer
        url={`https://youtube.com/embed/` + id}
        width="100%"
        height="200px"
        config={{
          youtube: { playerVars: { origin: "http://localhost:3000" } },
        }}
      ></ReactPlayer> */}
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
        <h5>{channelViews} views</h5>
      </div>
    </div>
  );
}

export default Video;
