import React from "react";
import UserCard from "../../components/user/UserCard";
import UserDetailsCard from "../../components/user/UserDetailsCard";
import {
  allergyUserDetails,
  conditionUserDetails,
  noteList,
  primaryUserDetails,
  programsUserDetails,
} from "../../lib/constants";
import Notes from "../../components/common/Notes";
import { faBriefcase, faNoteSticky } from "@fortawesome/free-solid-svg-icons";

const UserPage = () => {
  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
        <div className=" col-span-2">
          <UserCard></UserCard>
        </div>
        <div className="col-span-1 flex flex-col justify-between gap-3">
          <Notes
            title="Recent Activities:"
            logo={faBriefcase}
            list={[]}
            placeholder="Follow up"
          ></Notes>
          <Notes
            title="Latest Note"
            logo={faNoteSticky}
            list={noteList}
          ></Notes>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
        <UserDetailsCard color="#0064D8" content={primaryUserDetails} />
        <UserDetailsCard color="#73B835" content={conditionUserDetails} />
        <UserDetailsCard color="#FFAE00" content={allergyUserDetails} />
        <UserDetailsCard color="#F14100" content={programsUserDetails} />
      </div>
    </div>
  );
};

export default UserPage;
