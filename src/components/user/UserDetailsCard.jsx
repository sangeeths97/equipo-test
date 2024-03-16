import React from "react";
import { formatDate } from "../../lib/utils";

const UserDetailsCard = ({ color, content }) => {
  return (
    <div
      className="border rounded-xl overflow-hidden"
      style={{ borderColor: color }}
    >
      <div className="h-3 w-full" style={{ backgroundColor: color }}></div>
      <div className="px-4 pt-5 pb-10 flex flex-col gap-y-4">
        {content?.map((item, index) => (
          <div key={`${item?.label}-${index}`} className="flex flex-wrap">
            <div
              className={`w-1/2 font-semibold text-lg flex flex-col mr-2 ${
                item?.highlight ? "text-red-500" : ""
              }`}
            >
              <span>{item?.label}:</span>
              {item?.subLabel ? (
                <span className="font-normal text-base text-gray-500">
                  ({item?.subLabel})
                </span>
              ) : null}
            </div>
            {item?.multiple ? (
              <>
                {item?.highlightBorder ? (
                  <div className="border w-full p-3 grid grid-cols-2 gap-2">
                    {item?.values.map((sub, index) => (
                      <div key={`${sub?.label}-${index}`}>
                        <span className="font-semibold mr-2">{sub.label}</span>
                        <span>{sub.value || "N/A"}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex flex-wrap gap-x-3">
                    {item?.values.map((sub, index) => (
                      <div key={`${sub?.label}-${index}`}>
                        {sub.label} : {sub.value || "N/A"}
                      </div>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <>
                <div
                  className={`text-lg ${item?.highlight ? "text-red-500" : ""}`}
                >
                  {item?.value ? (
                    <>{item?.isDate ? formatDate(item?.value) : item?.value}</>
                  ) : (
                    <>{item?.value === 0 ? 0 : "N/A"}</>
                  )}
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default UserDetailsCard;
