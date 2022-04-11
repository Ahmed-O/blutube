import React from "react";
import { HiOutlineArrowLeft } from "react-icons/hi";
import SearchBar from "./SearchBar.js";
import { useEffect, useState } from "react";

function SearchNav({ setSearchInput }) {
  // If back button is hit then show main navbar
  const mainNav = document.querySelector(".Nav");
  const searchNav = document.querySelector(".SearchNav");
  function showMainNav() {
    mainNav.classList.toggle("Nav-hidden");
    searchNav.classList.toggle("SearchNav-hidden");
  }

  // If screen size increases then show main navbar
  const [currWidth, updateWidth] = useState(window.innerWidth);
  useEffect(() => {
    if (currWidth > 660) {
      searchNav.classList.add("SearchNav-hidden");
      mainNav.classList.remove("Nav-hidden");
    }
  });

  window.addEventListener("resize", function () {
    updateWidth(window.innerWidth);
  });

  return (
    <div className="SearchNav SearchNav-hidden">
      <HiOutlineArrowLeft className="arrow-icon" onClick={showMainNav} />
      <SearchBar setSearchInput={setSearchInput}></SearchBar>
    </div>
  );
}

export default SearchNav;
