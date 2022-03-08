import React from "react";
import { sideBarData } from "./sideBarData";
import SignIn from "../NavBars/SignIn";

function FullSidebar() {
  return (
    <aside className="FullSidebar activeSideBar hide-sidebar">
      {sideBarData.map((item) => {
        return (
          <div className="sidebar-icon">
            {item[0]}
            <p> {item[1]}</p>
          </div>
        );
      })}
      {/* <div className="sidebar-signin">
        <h6>Sign in to like videos, comment, and subscribe.</h6>
        <SignIn />
      </div> */}
    </aside>
  );
}

export default FullSidebar;
