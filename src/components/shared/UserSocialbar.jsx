import React from "react";

const UserSocialbar = () => {
  return (
    <>
      <div className="flex gap-12">
        <div className="flex mt-8 flex-col">
          <p className="info-text base-medium">16</p>
          <h1 className="text-xl">Posts</h1>
        </div>
        <div className="flex mt-8 flex-col">
          <p className="info-text">146</p>
          <h1 className="text-xl">Followers</h1>
        </div>
        <div className="flex mt-8 flex-col">
          <p className="info-text">178</p>
          <h1 className="text-xl">Following</h1>
        </div>
      </div>
    </>
  );
};

export default UserSocialbar;
