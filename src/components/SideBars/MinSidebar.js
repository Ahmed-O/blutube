import React from "react";
import { sideBarData } from "./sideBarData";

function MinSidebar() {
  return (
    <aside className="MinSidebar activeSideBar">
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

export default MinSidebar;
