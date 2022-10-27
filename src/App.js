import "./App.css";
import MainNav from "./components/NavBars/MainNav";
import MinSidebar from "./components/SideBars/MinSidebar";
import FullSidebar from "./components/SideBars/FullSidebar";
import { useState } from "react";
import YoutubeAPI from "./components/MainContent/YoutubeAPI";

function App() {
  // Screen size state for navbar formatting
  const [currWidth, updateWidth] = useState(window.innerWidth);

  // Search input state
  const [searchInput, setSearchInput] = useState("");

  window.addEventListener("resize", function () {
    updateWidth(window.innerWidth);
  });

  return (
    <>
      <MainNav setSearchInput={setSearchInput} />
      <main className="main-section">
        {currWidth > 1330 ? <FullSidebar /> : <MinSidebar />}
        <YoutubeAPI searchInput={searchInput} setSearchInput={setSearchInput} />
      </main>
    </>
  );
}

export default App;
