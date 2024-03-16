import React from "react";

const InfoCompareCards = ({ title, labelOne, labelTwo, count }) => {
  return (
    <div className="border border-sky-500 rounded p-1 flex flex-col gap-y-1">
      <div className="w-full bg-sky-500 rounded-t h-8 text-white font-semibold flex justify-center items-center">
        {title}
      </div>
      {count ? (
        <div className="flex justify-center items-center flex-1">
          <div className="w-16 h-16 border-2 border-black rounded-full flex justify-center items-center text-xl">
            {count}
          </div>
        </div>
      ) : (
        <>
          <div className="w-full bg-slate-300 h-8 text-black flex justify-center items-center">
            <span>{labelOne?.title}:</span>
            <span className="font-bold ml-1">
              {labelOne?.value?.toFixed(2) || "N/A"}
            </span>
          </div>
          <div className="w-full bg-slate-300 rounded-b h-8 text-black flex justify-center items-center">
            <span>{labelTwo?.title}: </span>
            <span className="font-bold ml-1">
              {labelTwo?.value?.toFixed(2) || "N/A"}
            </span>
          </div>
        </>
      )}
    </div>
  );
};

export default InfoCompareCards;
