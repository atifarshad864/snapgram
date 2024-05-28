import React from "react";
import { userStories } from "@/constants";
const UserStories = () => {
  return (
    <>
      {userStories.map((link) => {
        return (
          <div key={link.id}>
            <img src={link.imgURL} alt="stories" className="max-md:size-10" />
            <p className="max-md:text-[12px]  md:text-center mt-1 text-sm">
              {link.name}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default UserStories;
