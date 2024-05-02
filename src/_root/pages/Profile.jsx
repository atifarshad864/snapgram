import React, { useState } from "react";
import { userTabs } from "@/constants";
import UserStories from "@/components/shared/UserStories";
import UpdateProfile from "./UpdateProfile";
import UserSocialbar from "@/components/shared/UserSocialbar";
import PostListing from "@/components/shared/PostListing";
const Profile = ({ userInfo }) => {
  const [selectedTab, setSelectedTab] = useState(userTabs[0].label);
  return (
    // m-0 p-0 is for small devices
    <>
      <div className="m-0 p-0  md:flex mt-12 ml-12 gap-6">
        <img
          src={
            userInfo?.imageId
              ? `http://localhost:3000/images/${userInfo.imageId}`
              : "/assets/icons/dummy.png"
          }
          alt="profile picture"
          className="rounded-full size-28"
        />
        <div className="flex flex-col ">
          <UpdateProfile />
          <h1 className="text-3xl">Atif</h1>
          <p className="text-[#7878A3]">@q321</p>
          <UserSocialbar />
          <div className="mt-8">
            <p className="text-sm text-white">
              👏 Please add your some bio to show public
            </p>
          </div>
          <div className="flex gap-10 mt-8">
            <UserStories />
          </div>
          <div className="flex justify-between items-center">
            <div className="ml-[-2rem] flex md:ml-[-8rem] items-center p-4">
              <ul className="flex bg-dark-2 text-white rounded-md">
                {userTabs.map((link) => {
                  const isActive = link.label === selectedTab;

                  return (
                    <li
                      key={link.label}
                      onClick={() => setSelectedTab(link.label)}
                      className={`px-0 border-r md:flex md:px-5 ${
                        isActive
                          ? "bg-gray-900 cursor-pointer transition 3s"
                          : ""
                      }`}
                    >
                      <span className="flex items-center justify-center p-2 gap-4">
                        <img src={link.imgURL} alt={link.label} />
                        {link.label}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
            <div>
              <div className="flex justify-around text-white gap-5 w-16 rounded-md p-1 bg-dark-2">
                <p className="text-white">All</p>
                <img
                  src="/assets/icons/filter.svg"
                  width={20}
                  height={20}
                  alt="filter"
                />
              </div>
            </div>
          </div>
          <PostListing selected={selectedTab} />
        </div>
      </div>
    </>
  );
};

export default Profile;
