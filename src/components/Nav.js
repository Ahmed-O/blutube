import React from "react";
import SignIn from "./SignIn";
import { VscMenu } from "react-icons/vsc";
import { AiFillYoutube } from "react-icons/ai";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardVoice } from "react-icons/md";
import { GrApps } from "react-icons/gr";
import { HiOutlineDotsVertical } from "react-icons/hi";

function Nav() {
  return (
    <nav className="Nav">
      <div className="left">
        <div className="icon-bg">
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
      </div>
      <div className="right">
        <div className="icon-bg">
          <MdKeyboardVoice />
        </div>
        <div className="icon-bg">
          <AiOutlineSearch />
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
}

export default Nav;
