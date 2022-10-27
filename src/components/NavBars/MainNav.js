import React from "react";
import SignIn from "./SignIn";
import { VscMenu } from "react-icons/vsc";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { GrApps } from "react-icons/gr";
import { HiOutlineDotsVertical } from "react-icons/hi";
import SearchBar from "./SearchBar";
import SearchNav from "./SearchNav";
import { useState } from "react";

function Nav({ setSearchInput }) {
  const [hiddenSearchNav, setHiddenSearchNav] = useState(true);

  function showSearchNav() {
    setHiddenSearchNav(false);
  }

  function showSideBar() {
    // const sideBar = document.querySelector(".MinSidebar");
    // sideBar.classList.toggle("activeSideBar");
  }

  if (hiddenSearchNav) {
    return (
      <nav className="Nav">
        <div className="left">
          <div className="icon-bg" onClick={showSideBar}>
            <VscMenu />
          </div>
          <div className="logo">
            <AiFillYoutube className="logo-icon" />
            <h3 className="logo-name"> BluTube</h3>
          </div>
        </div>
        <div className="mid">
          {/* <input type="text" placeholder="Search" className="search-bar" />
          <AiOutlineSearch className="search-icon" />
          <MdKeyboardVoice className="voice-icon" /> */}
          <SearchBar setSearchInput={setSearchInput} />
        </div>
        <div className="right">
          <div
            className="icon-bg hide-icon"
            id="navSearch"
            onClick={showSearchNav}
          >
            <AiOutlineSearch />
          </div>
          <div className="icon-bg hide-icon">
            <MdKeyboardVoice />
          </div>
          <div className="icon-bg">
            <GrApps />
          </div>
          <div className="icon-bg">
            <HiOutlineDotsVertical />
          </div>
          <SignIn />
        </div>
      </nav>
    );
  } else {
    return (
      <SearchNav
        setSearchInput={setSearchInput}
        hiddenSearchNav={hiddenSearchNav}
        setHiddenSearchNav={setHiddenSearchNav}
      />
    );
  }
}

export default Nav;
