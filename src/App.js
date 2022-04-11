import "./App.css";
import MainNav from "./components/NavBars/MainNav";
import MinSidebar from "./components/SideBars/MinSidebar";
import FullSidebar from "./components/SideBars/FullSidebar";
import SearchNav from "./components/NavBars/SearchNav";
import { useEffect, useState } from "react";
import YoutubeAPI from "./components/MainContent/YoutubeAPI";

function App() {
  // Screen size state
  const [currWidth, updateWidth] = useState(window.innerWidth);
  // console.log("inner width is " + currWidth);

  // Search input state
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {}, []);

  window.addEventListener("resize", function () {
    updateWidth(window.innerWidth);
  });

  return (
    <>
      <MainNav setSearchInput={setSearchInput} />
      <SearchNav setSearchInput={setSearchInput} />
      <main className="main-section">
        {currWidth > 1330 ? <FullSidebar /> : <MinSidebar />}
        <YoutubeAPI searchInput={searchInput} setSearchInput={setSearchInput} />
        {/* <div className="content">
          <YoutubeAPI
            searchInput={searchInput}
            setSearchInput={setSearchInput}
          />
        </div> */}
      </main>
    </>
  );
}

export default App;
