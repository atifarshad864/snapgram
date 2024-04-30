import React from "react";
import { userStories } from "@/constants";
const UserStories = () => {
  return (
    <>
      {userStories.map((link) => {
        return (
          <div key={link.id}>
            <img src={link.imgURL} alt="stories" />
            <p className="text-center mt-1">{link.name}</p>
          </div>
        );
      })}
    </>
  );
};

export default UserStories;
