import Loader from "@/components/shared/Loader";
import PostCard from "@/components/shared/PostCard";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import React, { useState, useEffect } from "react";

const Home = () => {
  // const isPostLoading = true;
  // const posts = null;
  const { isPending, data, isError } = useGetRecentPosts();
  const [postData, setPostData] = useState([]);

  useEffect(() => {
    setPostData(data?.data?.data);
  }, [data]);

  return (
    <div className="">
      <div className="home-container">
        <div className="home-posts">
          <h2 className="h3-bold md:h2-bold text-left w-full">Home Feed</h2>
          {isPending ? (
            <Loader />
          ) : (
            <ul className="w-fit mx-auto">
              {postData?.map((post) => (
                <PostCard
                  post={post}
                  setPostData={setPostData}
                  key={post._id}
                />
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
