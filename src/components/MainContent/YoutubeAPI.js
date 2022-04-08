import Axios from "axios";
import { useContext, useEffect, useState } from "react";
import SearchContext from "../../App";
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
    const getPopularVideos = () => {
      Axios.get(mostPopularURL).then((response) => {
        console.log("popular");
        console.log(response.data.items);
        setPopularVideos(response.data.items);
        // return response.data.items;
      });
    };
    const getSearchVideos = () => {
      Axios.get(searchURL).then((response) => {
        console.log("search ");
        console.log(response.data.items);
        setSearchVideos(response.data.items);
        // return response.data.items;
      });
    };

    // If search input is enter fetch search data
    if (searchInput) {
      getSearchVideos();
      console.log("IN SEARCH VIDS");
    } else {
      console.log("IN POPULAR VIDS");
      getPopularVideos();
    }

    // console.log(popularVideos);
    // getPopularVideos();
  }, [searchInput]);

  let id = "";
  let thumbnail = "";
  let videoTitle = "";
  let channelTitle = "";
  let channelViews = "";

  // if (popularVideos.length) {
  //   id = popularVideos[0].id;
  //   thumbnail = popularVideos[0].snippet.thumbnails.medium.url;
  //   videoTitle = popularVideos[0].snippet.title;
  //   channelTitle = popularVideos[0].snippet.channelTitle;
  //   channelViews = popularVideos[0].statistics.viewCount;
  // }

  // Iterate thru the response data and pass in the Video component
  //

  // CONTEXT HOOK
  // const data = useContext(SearchContext);
  // console.log(SearchContext);
  // console.log("CONTEXT IS " + data);
  // console.log("Seach Input is " + searchInput);
  // setSearchInput("hoho");
  console.log("Seach Input is " + searchInput);

  if (searchInput) {
    return (
      <div className="MainVideos">
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
      <div className="MainVideos">
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
        {/* <Video
            thumbnail={thumbnail}
            videoTitle={videoTitle}
            channelTitle={channelTitle}
            channelViews={channelViews}
          /> */}
      </div>
    );
  }
}

export default YoutubeAPI;
