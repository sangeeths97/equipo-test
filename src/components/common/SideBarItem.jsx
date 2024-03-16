import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SideBarItem = ({ list }) => {
  const pathName = window.location.pathname;
  return (
    <div className="border-b border-primary w-full">
      {list?.map((item, index) => (
        <NavLink
          key={`${index}-${item?.url}`}
          to={item?.url}
          className={`flex items-center justify-center min-h-[56px] group hover:bg-white ${
            pathName.startsWith(item.url) ? "!bg-white" : ""
          }`}
          activeClassName="!bg-red-500"
        >
          <FontAwesomeIcon
            icon={item?.logo}
            className={`text-primary group-hover:text-black  ${
              pathName.startsWith(item.url) ? "!text-black" : ""
            }`}
            style={{ fontSize: 20 }}
          />
        </NavLink>
      ))}
    </div>
  );
};

export default SideBarItem;
