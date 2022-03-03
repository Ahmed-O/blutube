import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { HiOutlineArrowLeft } from "react-icons/hi";
import SearchBar from "./SearchBar.js";

function SearchNav() {
  function showMainNav() {
    const nav = document.querySelector(".Nav");
    nav.classList.toggle("Nav-hidden");

    const searchNav = document.querySelector(".SearchNav");
    searchNav.classList.toggle("SearchNav-hidden");
  }

  return (
    <div className="SearchNav SearchNav-hidden">
      <HiOutlineArrowLeft className="arrow-icon" onClick={showMainNav} />
      <SearchBar></SearchBar>
      {/* <MdKeyboardVoice className="voice-icon" /> */}
    </div>
  );
}

export default SearchNav;
