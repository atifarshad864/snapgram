import React, { useEffect, useState } from "react";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import { Button } from "@/components/ui/button";
// import PostCard from "@/components/shared/PostCard";
import Loader from "@/components/shared/Loader";
import UserStories from "@/components/shared/UserStories";
const Profile = () => {
  const { isPending, data, isError } = useGetRecentPosts();

  const [postData, setPostData] = useState([]);
  useEffect(() => {
    setPostData(data?.data?.data);
  }, [data]);
  return (
    <>
      <div className="flex mt-12 ml-12 gap-6 ">
        <img
          src="http://localhost:3000/images/1713423076839.png"
          alt="profile picture"
          className="rounded-full size-28"
        />

        <div className="flex flex-col">
          <Button className="flex bg-dark-2 text-white gap-5 w-36 m-auto relative top-10">
            <img
              src="/assets/icons/edit.svg"
              alt="edit"
              width={20}
              height={20}
            />
            Edit Profile
          </Button>
          <h1 className="text-3xl">Your profile name</h1>
          <p className="text-[#7878A3]">@yourusername</p>
          <div className="flex gap-12">
            <div className="flex mt-8 flex-col">
              <p className="info-text">287</p>
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
          <div className="mt-4">
            <p className="text-sm text-white">
              Please add your some bio to show public👏
            </p>
          </div>
          <div className="flex gap-4 mt-4">
            <UserStories />
          </div>
          <div className="flex gap-2">
            <div className="flex justify-center bg-dark-2 text-white gap-5 w-28 rounded-md mt-4 p-1">
              <img
                src="/assets/icons/posts.svg"
                alt="posts"
                width={20}
                height={20}
              />
              <p className="text-white">Posts</p>
            </div>
            <div className="flex justify-center bg-dark-2 text-white gap-5 w-28 rounded-md mt-4 p-1">
              <img
                src="/assets/icons/filter.svg"
                width={20}
                height={20}
                alt="filter"
              />
              <p className="text-white">All</p>
            </div>
          </div>
          <div className="mt-12">
            {isPending ? (
              <Loader />
            ) : (
              <ul className="grid-container">
                {postData?.map((post) => (
                  <li key={post.id}>
                    {/* <p>{post.caption}</p> */}
                    <img
                      src={
                        `http://localhost:3000/images/${post.imageId}` ||
                        "/assets/icons/profile-placeholder.svg"
                      }
                      alt="post image"
                      className="rounded-lg size-60 object-cover"
                    />{" "}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
