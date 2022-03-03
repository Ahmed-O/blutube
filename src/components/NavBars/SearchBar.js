import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";

function SearchBar() {
  return (
    <div className="SearchBar">
      <input type="text" placeholder="Search" className="search-bar" />
      <AiOutlineSearch className="search-icon" />
      <MdKeyboardVoice className="voice-icon" />
    </div>
  );
}

export default SearchBar;
