import { faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Slider from "react-slick";

const Notes = ({ logo, title, placeholder, list }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="rounded-md shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)]">
      <div className="flex bg-sky-600 p-2  items-center justify-between rounded-t-md">
        <div className="flex items-center gap-x-2">
          <FontAwesomeIcon
            icon={logo}
            style={{ fontSize: 20, color: "white" }}
          />
          <span className="text-white text-lg font-semibold">{title}</span>
        </div>
        <div>
          <FontAwesomeIcon
            icon={faCirclePlus}
            style={{ fontSize: 20, color: "white" }}
          />
        </div>
      </div>
      <div className="w-full py-3 min-h-[80px]">
        {list?.length ? (
          <>
            <Slider {...settings}>
              {list?.map((item) => (
                <div key={item} className="px-[30px]">
                  <h3>{item}</h3>
                </div>
              ))}
            </Slider>
          </>
        ) : (
          <div className="px-2 text-gray-500">{placeholder}</div>
        )}
      </div>
    </div>
  );
};

export default Notes;
