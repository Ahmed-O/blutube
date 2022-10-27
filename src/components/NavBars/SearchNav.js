import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import SearchBar from "./SearchBar.js";
import { useEffect, useState } from "react";

function SearchNav({ setSearchInput, hiddenSearchNav, setHiddenSearchNav }) {
  // If back button is hit then show main navbar
  function showMainNav() {
    setHiddenSearchNav(true);
  }

  // If screen size increases then show main navbar
  const [currWidth, updateWidth] = useState(window.innerWidth);
  useEffect(() => {
    if ((currWidth > 660) & !hiddenSearchNav) {
      setHiddenSearchNav(true);
    }
  }, [currWidth, hiddenSearchNav, setHiddenSearchNav]);

  window.addEventListener("resize", function () {
    updateWidth(window.innerWidth);
  });

  return (
    <div className="SearchNav">
      <HiOutlineArrowLeft className="arrow-icon" onClick={showMainNav} />
      <SearchBar setSearchInput={setSearchInput}></SearchBar>
    </div>
  );
}

export default SearchNav;
