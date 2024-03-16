import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faMagnifyingGlass,
  faChevronDown,
  faXmark,
  faPlus,
  faRectangleAd,
  faGear,
  faBullhorn,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { faBell, faFile } from "@fortawesome/free-regular-svg-icons";
import Button from "./Button";
import Logo from "../../assets/logo.png";

const Header = () => {
  const [search, setSearch] = useState("");
  return (
    <div className="fixed top-0 left-0 z-20 w-full h-28 lg:h-14 shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)]  bg-white flex">
      <div className="w-16 min-w-[64px] flex items-start pt-3 justify-center bg-sky-500 h-full">
        <FontAwesomeIcon
          icon={faBars}
          style={{ fontSize: 36, color: "white" }}
        />
      </div>
      <div className="flex flex-col h-full lg:flex-row justify-between lg:items-center w-full">
        <div className="flex items-center h-full">
          <div className="flex items-center h-10 border border-blue-600/[30] overflow-hidden rounded-3xl ml-6">
            <div className="h-full bg-primary flex justify-center items-center gap-x-3 px-3">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: 20, color: "gray" }}
              />
              <FontAwesomeIcon
                icon={faChevronDown}
                style={{ fontSize: 14, color: "gray" }}
              />
            </div>
            <input
              type="text"
              className="w-[150px] xl:w-[210px] 2xl:w-[350px] px-4"
              placeholder="Last Name / FIrst Name"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
            <button
              type="button"
              onClick={() => {
                setSearch("");
              }}
              className="flex justify-center items-center px-4"
            >
              <FontAwesomeIcon
                icon={faXmark}
                style={{ fontSize: 16, color: "gray" }}
              />
            </button>
          </div>
          <Button
            type="button"
            className="bg-sky-600 hover:bg-white duration-500 border border-sky-600 overflow-hidden px-5 ml-3 xl:ml-8 text-white hover:text-sky-600"
          >
            <div className="flex justify-center items-center gap-x-1">
              <FontAwesomeIcon
                icon={faMagnifyingGlass}
                style={{ fontSize: 16 }}
              />
              <span className="font-bold whitespace-nowrap">
                Advanced Search
              </span>
            </div>
          </Button>
          <Button
            type="button"
            className="bg-sky-600 hover:bg-white duration-500 border border-sky-600 overflow-hidden px-5 ml-3  text-white hover:text-sky-600"
          >
            <div className="flex justify-center items-center gap-x-1">
              <FontAwesomeIcon icon={faPlus} style={{ fontSize: 16 }} />
              <span className="font-bold lg:hidden xl:flex">Patient</span>
            </div>
          </Button>
        </div>
        <div className="flex items-center h-full pr-6 gap-x-3 ml-6 lg:ml-0">
          <img src={Logo} alt="logo" className="h-10" />
          <div className="flex justify-center items-center border border-gray-600 h-10 w-10 rounded-full bg-slate-200">
            <FontAwesomeIcon
              icon={faBell}
              style={{ fontSize: 20, color: "#313131" }}
            />
          </div>
          <div className="flex justify-center items-center border border-gray-600 h-10 w-10 rounded-full bg-slate-200">
            <FontAwesomeIcon
              icon={faGear}
              style={{ fontSize: 20, color: "#313131" }}
            />
          </div>
          <div className="flex justify-center items-center border border-gray-600 h-10 w-10 rounded-full bg-slate-200">
            <FontAwesomeIcon
              icon={faFile}
              style={{ fontSize: 20, color: "#313131" }}
            />
          </div>
          <div className="flex justify-center items-center border border-gray-600 h-10 w-10 rounded-full bg-slate-200">
            <FontAwesomeIcon
              icon={faBullhorn}
              style={{ fontSize: 20, color: "#313131" }}
            />
          </div>
          <div className="flex justify-center items-center h-10 w-10 rounded-full bg-gray-500">
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: 20, color: "white" }}
            />
          </div>
          <FontAwesomeIcon
            icon={faChevronDown}
            style={{ fontSize: 14, color: "gray" }}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
