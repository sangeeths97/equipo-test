import React from "react";
import { user } from "../../lib/constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faVenus,
  faMars,
  faTransgender,
  faEarthAmericas,
  faBriefcase,
  faArrowDown19,
  faLocationDot,
  faPencil,
  faEllipsisV,
  faPlus,
  faPhone,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { findAge, formatDate } from "../../lib/utils";
import { faAddressCard } from "@fortawesome/free-regular-svg-icons";
import InfoCompareCards from "../common/InfoCompareCards";
import Button from "../common/Button";
import { Link } from "react-router-dom";

const UserCard = ({}) => {
  return (
    <div className="shadow-[4px_7px_14px_-3px_rgba(191,191,191,1)] rounded-md border p-3 grid grid-cols-1 lg:grid-cols-3 gap-5 w-full">
      <div class="col-span-2">
        <div className="flex gap-x-3">
          <div className="w-24 h-24 min-h-[96px] min-w-[96px] rounded-full overflow-hidden bg-gray-300 flex justify-center items-center">
            <FontAwesomeIcon
              icon={faUser}
              style={{ fontSize: 80, color: "white" }}
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <div className="flex items-center gap-x-1 flex-wrap">
              <h2 className=" text-xl font-bold text-sky-600">{user.name}</h2>
              <div className="flex bg-orange-600 h-8 rounded-md overflow-hidden">
                <button
                  type="button"
                  className="px-2 border-r border-[#D66A00]"
                >
                  <FontAwesomeIcon
                    icon={faPencil}
                    style={{ fontSize: 16, color: "white" }}
                  />
                </button>
                <button type="button" className="px-2">
                  <FontAwesomeIcon
                    icon={faEllipsisV}
                    style={{ fontSize: 16, color: "white" }}
                  />
                </button>
              </div>
              <Button
                type="button"
                className="bg-sky-600 hover:bg-white duration-500 border border-sky-600 overflow-hidden px-2 text-white hover:text-sky-600 h-8"
              >
                <div className="flex justify-center items-center gap-x-1">
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: 16 }} />
                  <span className="font-bold">Chart</span>
                </div>
              </Button>
              <Button
                type="button"
                className="bg-sky-600 hover:bg-white duration-500 border border-sky-600 overflow-hidden px-2 text-white hover:text-sky-600 h-8"
              >
                <div className="flex justify-center items-center gap-x-1">
                  <FontAwesomeIcon icon={faPlus} style={{ fontSize: 16 }} />
                  <span className="font-bold">Enroll</span>
                </div>
              </Button>
            </div>
            <div className="flex items-center">
              {user.gender === "male" ? (
                <FontAwesomeIcon
                  icon={faMars}
                  style={{ fontSize: 16, color: "black" }}
                />
              ) : null}
              {user.gender === "female" ? (
                <FontAwesomeIcon
                  icon={faVenus}
                  style={{ fontSize: 36, color: "black" }}
                />
              ) : null}
              {user.gender === "other" ? (
                <FontAwesomeIcon
                  icon={faTransgender}
                  style={{ fontSize: 36, color: "black" }}
                />
              ) : null}
              <span className=" capitalize ml-1">{user.gender}</span>
              <div className="font-bold ml-2">DOB: </div>
              <span>
                {formatDate(user?.dob)} ({findAge(user?.dob)} Yrs)
              </span>
            </div>
            <div className="flex items-center gap-x-2">
              <FontAwesomeIcon
                icon={faEarthAmericas}
                style={{ fontSize: 16, color: "black" }}
              />

              <div className="font-bold">Ethnicity: </div>
              <span>{user.ethnicity}</span>
            </div>
            <div className="flex items-center gap-x-2">
              <FontAwesomeIcon
                icon={faBriefcase}
                style={{ fontSize: 16, color: "black" }}
              />

              <div className="font-bold">Occupation: </div>
              <span>{user.occupation}</span>
            </div>
            <div className="flex items-center flex-wrap gap-2">
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={faAddressCard}
                  style={{ fontSize: 16, color: "black" }}
                />

                <div className="font-bold">Account #: </div>
                <span>{user.acc_no}</span>
              </div>
              <div className="flex items-center gap-x-2">
                <FontAwesomeIcon
                  icon={faArrowDown19}
                  style={{ fontSize: 16, color: "black" }}
                />
                <div className="font-bold">MRN: </div>
                <span>- ({user.MRN})</span>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 xl:grid-cols-4 mt-4 gap-1">
          <InfoCompareCards
            title="Risk"
            labelOne={{ title: "This Year", value: user.risk.this }}
            labelTwo={{ title: "Last Year", value: user.risk.last }}
          />
          <InfoCompareCards title="Risk" count={user.care_gap} />
          <InfoCompareCards
            title="ASCVD"
            labelOne={{ title: "Current Risk", value: user.ascvd.current }}
            labelTwo={{
              title: "Lowest Risk",
              value: user.ascvd.lowest,
            }}
          />
          <InfoCompareCards
            title="SDOH"
            labelOne={{ title: "This Year", value: user.sdoh.this }}
            labelTwo={{ title: "Last Year", value: user.sdoh.last }}
          />
        </div>
      </div>
      <div class="col-span-1 flex flex-col gap-y-2">
        <div className="flex items-baseline gap-x-2">
          <FontAwesomeIcon
            icon={faLocationDot}
            style={{ fontSize: 16, color: "black" }}
          />

          <span>
            {user.address.line_1}, {user.address?.city}, {user?.address?.state},{" "}
            {user?.address?.code}
          </span>
        </div>
        <div className="flex items-baseline gap-x-2 flex-wrap">
          <span className="font-bold">Primary: </span>
          <div className="flex items-center">
            <span>{user.contact.primary}</span>
            <Link
              to={`tel:${user.contact.primary}`}
              className="px-2 ml-2 rounded-md bg-[#D66A00]"
            >
              <FontAwesomeIcon
                icon={faPhone}
                style={{ fontSize: 16, color: "white" }}
              />
            </Link>
          </div>
        </div>
        <div className="flex items-baseline gap-x-2 flex-wrap">
          <span className="font-bold">Emergency: </span>
          <span>{user.contact.emergency}</span>
        </div>
        <div className="flex items-baseline gap-x-2 flex-wrap">
          <span className="font-bold">Policy Number: </span>
          <span>{user.policy.no}</span>
        </div>
        <div className="flex items-baseline gap-x-2 flex-wrap">
          <span className="font-bold">Insurer: </span>
          <span>{user.policy.insurer}</span>
        </div>
        <div className="border w-full flex flex-col p-2">
          <span className="font-bold mb-3">Screenings</span>
          <div className="flex flex-wrap gap-x-3 gap-y-2">
            {user?.screenings?.map((item, index) => (
              <div
                key={`${index}-${item}`}
                className="flex items-center gap-x-2 gap-y-1"
              >
                <div className="border-2 border-gray-200 bg-gray-300 w-4 h-4 rounded-full"></div>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
