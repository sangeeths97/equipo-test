import React from "react";
import Header from "./Header";
import SideBar from "./SideBar";
import QuickAccess from "./QuickAccess";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="flex mt-28 lg:mt-14">
        <SideBar />
        <div className="w-full ml-16 min-h-[calc(100vh-112px)] lg:min-h-[calc(100vh-56px)] flex flex-col justify-between">
          <div className="mx-auto container py-5 px-4">{children}</div>
          <p className="px-4">2022 © Equipo | Build V.</p>
        </div>
      </div>
      <QuickAccess />
    </div>
  );
};

export default Layout;
