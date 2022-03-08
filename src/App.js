import "./App.css";
import Nav from "./components/NavBars/MainNav";
import MinSidebar from "./components/SideBars/MinSidebar";
import FullSidebar from "./components/SideBars/FullSidebar";
import SearchNav from "./components/NavBars/SearchNav";
import { useEffect, useState } from "react";
import YoutubeAPI from "./components/MainContent/YoutubeAPI";

function App() {
  // Screen size state
  const [currWidth, updateWidth] = useState(window.innerWidth);
  // console.log("inner width is " + currWidth);

  useEffect(() => {}, []);

  window.addEventListener("resize", function () {
    updateWidth(window.innerWidth);
    // console.log("currWidth = " + currWidth);
  });

  return (
    <>
      <Nav />
      <SearchNav />
      <main className="main-section">
        {currWidth > 1330 ? <FullSidebar /> : <MinSidebar />}
        <div className="content">
          <YoutubeAPI />
        </div>
      </main>
    </>
  );
}

export default App;
