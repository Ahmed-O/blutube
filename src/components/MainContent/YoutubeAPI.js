import Axios from "axios";
import { useEffect, useState } from "react";
import PopularVideo from "./PopularVideo";
import SearchVideo from "./SearchVideo";

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=25&regionCode=US&key=AIzaSyDE7s9MtCRX9Ymfe5dyptDDKkpUrgoH8X4

function YoutubeAPI({ searchInput, setSearchInput }) {
  const baseURL = "https://www.googleapis.com/youtube/v3";
  const APIKey = process.env.REACT_APP_API_KEY;
  const mostPopularURL =
    "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=20&regionCode=US&key=" +
    APIKey;
  const searchURL =
    "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=" +
    searchInput +
    "%20&regionCode=US&key=" +
    APIKey;
  let [popularVideos, setPopularVideos] = useState([]);
  let [searchVideos, setSearchVideos] = useState([]);

  useEffect(() => {
    // API call to popular videos
    const getPopularVideos = () => {
      Axios.get(mostPopularURL).then((response) => {
        // console.log("popular");
        // console.log(response.data.items);
        setPopularVideos(response.data.items);
      });
    };

    // API call to searched videos
    const getSearchVideos = () => {
      Axios.get(searchURL).then((response) => {
        // console.log("search ");
        // console.log(response.data.items);
        setSearchVideos(response.data.items);
      });
    };

    // If search input is entered then retrieve search results
    if (searchInput) {
      getSearchVideos();
    } else {
      getPopularVideos();
    }
  }, [searchInput]);

  if (searchInput) {
    return (
      <div className="SearchVideos">
        {searchVideos.map((video) => {
          return (
            <SearchVideo
              key={video.id.videoId}
              id={video.id.videoId}
              videoTitle={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              description={video.snippet.description}
            />
          );
        })}
      </div>
    );
  } else {
    return (
      <div className="PopularVideos">
        {popularVideos.map((video) => {
          return (
            <PopularVideo
              key={video.id}
              id={video.id}
              thumbnail={video.snippet.thumbnails.medium.url}
              videoTitle={video.snippet.title}
              channelTitle={video.snippet.channelTitle}
              channelViews={video.statistics.viewCount}
            />
          );
        })}
      </div>
    );
  }
}

export default YoutubeAPI;
