import React from "react";

const UserSocialbar = () => {
  return (
    <>
      <div className=" max-md:flex max-md:gap-8 md:flex md:gap-12">
        <div className="flex mt-8 flex-col">
          <p className="info-text">16</p>
          <h1 className="max-md:text-sm md:text-xl">Posts</h1>
        </div>
        <div className="flex mt-8 flex-col">
          <p className="info-text ">146</p>
          <h1 className="max-md:text-sm md:text-xl">Followers</h1>
        </div>
        <div className="flex mt-8 flex-col">
          <p className="info-text">178</p>
          <h1 className=" max-md:text-sm md:text-xl">Following</h1>
        </div>
      </div>
    </>
  );
};

export default UserSocialbar;
