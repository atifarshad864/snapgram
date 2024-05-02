import React from "react";
import UserPosts from "./UserPosts";
import Reels from "./Reels";
import Tagged from "./Tagged";

const PostListing = ({ selected }) => {
  const componentMapping = {
    Posts: <UserPosts />,
    Reels: <Reels />,
    Tagged: <Tagged />,
  };
  return componentMapping[selected];
};

export default PostListing;
