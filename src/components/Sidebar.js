import React from "react";
import { AiOutlineHome } from "react-icons/ai";
import { AiFillHome } from "react-icons/ai";
import { MdOutlineExplore } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { BsCollectionPlay } from "react-icons/bs";
import { BsFillCollectionPlayFill } from "react-icons/bs";
import { MdOutlineSubscriptions } from "react-icons/md";
import { MdSubscriptions } from "react-icons/md";
import { MdOutlineVideoLibrary } from "react-icons/md";
import { MdVideoLibrary } from "react-icons/md";
import { MdHistory } from "react-icons/md";

function Sidebar() {
  return (
    <aside className="Sidebar">
      <div className="sidebar-icon">
        <AiFillHome />
        <p>Home</p>
      </div>
      <div className="sidebar-icon">
        <MdOutlineExplore />
        <p>Explore</p>
      </div>
      <div className="sidebar-icon">
        <BsCollectionPlay />
        <p>Shorts</p>
      </div>
      <div className="sidebar-icon">
        <MdOutlineSubscriptions />
        <p>Subscriptions</p>
      </div>
      <div className="sidebar-icon">
        <MdOutlineVideoLibrary />
        <p>Library</p>
      </div>
      <div className="sidebar-icon">
        <MdHistory />
        <p>History</p>
      </div>
    </aside>
  );
}

export default Sidebar;
