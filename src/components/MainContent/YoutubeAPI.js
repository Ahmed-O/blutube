import Axios from "axios";
import { useEffect, useState } from "react";
import Video from "./Video";

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyDE7s9MtCRX9Ymfe5dyptDDKkpUrgoH8X4

function YoutubeAPI() {
  const baseURL = "https://www.googleapis.com/youtube/v3";
  const APIKey = "AIzaSyDE7s9MtCRX9Ymfe5dyptDDKkpUrgoH8X4";
  const mostPopularURL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=AIzaSyDE7s9MtCRX9Ymfe5dyptDDKkpUrgoH8X4";

  let [popularVideos, setPopularVideos] = useState([]);

  useEffect(() => {
    const getVideos = () => {
      Axios.get(mostPopularURL).then((response) => {
        console.log(response.data.items);
        setPopularVideos(response.data.items);
        // return response.data.items;
      });
    };
    console.log(popularVideos);
    getVideos();
  }, []);

  let thumbnail = "";
  let videoTitle = "";
  let channelTitle = "";
  let channelViews = "";

  if (popularVideos.length) {
    thumbnail = popularVideos[0].snippet.thumbnails.medium.url;
    videoTitle = popularVideos[0].snippet.title;
    channelTitle = popularVideos[0].snippet.channelTitle;
    channelViews = popularVideos[0].statistics.viewCount;
  }

  // Iterate thru the response data and pass in the Video component
  //
  return (
    <div className="MainVideos">
      {popularVideos.map((video) => {
        return (
          <Video
            thumbnail={video.snippet.thumbnails.medium.url}
            videoTitle={video.snippet.title}
            channelTitle={video.snippet.channelTitle}
            channelViews={video.statistics.viewCount}
          />
        );
      })}
      {/* <Video
        thumbnail={thumbnail}
        videoTitle={videoTitle}
        channelTitle={channelTitle}
        channelViews={channelViews}
      /> */}
    </div>
  );
}

export default YoutubeAPI;
