import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClose,
  faGear,
  faHome,
  faList,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
const QuickAccess = () => {
  const [viewOtions, setViewOptions] = useState(false);

  const smallBtnClass =
    "absolute -left-[50px] top-[40px] flex justify-center items-center border border-red-400 hover:bg-red-400 text-red-400 hover:text-white duration-500 shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] rounded-full w-10 h-10";
  return (
    <div className="fixed bottom-10 right-10">
      <div className="relative">
        <button
          type="button"
          onClick={() => setViewOptions((prev) => !prev)}
          className="flex justify-center items-center bg-red-400 hover:bg-rose-700 duration-500 text-white w-20 h-20 rounded-full shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)]"
        >
          <FontAwesomeIcon icon={faList} style={{ fontSize: 40 }} />
        </button>
        {viewOtions ? (
          <>
            <div className="absolute -left-[50px] top-[40px] flex justify-center items-center bg-white border border-red-400 hover:bg-red-400 text-red-400 hover:text-white duration-500 shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] rounded-full w-10 h-10">
              <FontAwesomeIcon icon={faHome} style={{ fontSize: 20 }} />
            </div>
            <div className="absolute -left-[50px] -top-[10px] flex justify-center items-center bg-white border border-red-400 hover:bg-red-400 text-red-400 hover:text-white duration-500 shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] rounded-full w-10 h-10">
              <FontAwesomeIcon icon={faUser} style={{ fontSize: 20 }} />
            </div>
            <div className="absolute -left-[20px] -top-[50px] flex justify-center items-center bg-white border border-red-400 hover:bg-red-400 text-red-400 hover:text-white duration-500 shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] rounded-full w-10 h-10">
              <FontAwesomeIcon icon={faGear} style={{ fontSize: 20 }} />
            </div>
            <button
              type="button"
              onClick={() => setViewOptions((prev) => !prev)}
              className="absolute left-[30px] -top-[55px] flex justify-center items-center  bg-white border border-black hover:bg-black text-black hover:text-white duration-500 shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] rounded-full w-10 h-10"
            >
              <FontAwesomeIcon icon={faClose} style={{ fontSize: 20 }} />
            </button>
          </>
        ) : null}
      </div>
    </div>
  );
};

export default QuickAccess;
