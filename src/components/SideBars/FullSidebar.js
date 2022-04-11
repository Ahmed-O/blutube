import React from "react";
import { sideBarData } from "./sideBarData";
import SignIn from "../NavBars/SignIn";

function FullSidebar() {
  return (
    <aside className="FullSidebar activeSideBar hide-sidebar">
      {sideBarData.map((item, index) => {
        return (
          <div key={index} className="sidebar-icon">
            {item[0]}
            <p> {item[1]}</p>
          </div>
        );
      })}
    </aside>
  );
}

export default FullSidebar;
