import "./App.css";
import Nav from "./components/NavBars/MainNav";
import MinSidebar from "./components/SideBars/MinSidebar";
import FullSidebar from "./components/SideBars/FullSidebar";
import SearchNav from "./components/NavBars/SearchNav";
import { useEffect, useState } from "react";
import { createContext, useContext } from "react";
import YoutubeAPI from "./components/MainContent/YoutubeAPI";

const SearchContext = createContext("");

function App() {
  // Screen size state
  const [currWidth, updateWidth] = useState(window.innerWidth);
  // console.log("inner width is " + currWidth);

  // Search input state
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {}, []);

  window.addEventListener("resize", function () {
    updateWidth(window.innerWidth);
    // console.log("currWidth = " + currWidth);
  });

  return (
    <>
      <Nav setSearchInput={setSearchInput} />
      <SearchNav />
      <main className="main-section">
        {currWidth > 1330 ? <FullSidebar /> : <MinSidebar />}
        <SearchContext.Provider value="hello">
          <div className="content">
            <SearchContext.Provider value="hello">
              <YoutubeAPI
                searchInput={searchInput}
                setSearchInput={setSearchInput}
              />
            </SearchContext.Provider>
          </div>
        </SearchContext.Provider>
      </main>
    </>
  );
}

export default App;
