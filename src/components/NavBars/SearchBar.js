import React from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";

function SearchBar({ setSearchInput }) {
  function vidSearch(e) {
    e.preventDefault();
    const searchTerm = document.querySelector(".search-bar").value;
    setSearchInput(searchTerm);
  }

  return (
    <form onSubmit={vidSearch} className="SearchBar">
      <input type="text" placeholder="Search" className="search-bar" />
      <AiOutlineSearch onClick={vidSearch} className="search-icon" />
      <MdKeyboardVoice className="voice-icon" />
    </form>
  );
}

export default SearchBar;
