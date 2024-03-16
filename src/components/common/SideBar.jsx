import React from "react";
import SideBarItem from "./SideBarItem";
import {
  navList1,
  navList2,
  navList3,
  navList4,
  navList5,
} from "../../lib/navigationList";

const SideBar = () => {
  return (
    <div className="w-16 min-w-[64px] min-h-screen bg-sky-600 fixed left-0 top-0 z-10">
      <div className="flex flex-col items-center overflow-auto max-h-[calc(100vh-56px)] mt-28 lg:mt-14">
        <SideBarItem list={navList1} />
        <SideBarItem list={navList2} />
        <SideBarItem list={navList3} />
        <SideBarItem list={navList4} />
        <SideBarItem list={navList5} />
      </div>
    </div>
  );
};

export default SideBar;
