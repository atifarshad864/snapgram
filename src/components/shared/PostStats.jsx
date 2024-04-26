import { useLikePost, useSavePost } from "@/lib/react-query/queries";
import React, { useState } from "react";
const PostStats = ({ post, setPostData, userInfo }) => {
  const [isSaved, setIsSaved] = useState(false);

  const likePost = useLikePost(post._id);
  const savePost = useSavePost(post._id);
  console.log(likePost);
  const handleLikePost = async () => {
    likePost.mutateAsync(post._id);
    setPostData((prev) => {
      const postData = [...prev];
      const index = postData.findIndex((p) => p._id === post._id);
      if (post.likes.some((id) => id === userInfo?._id)) {
        postData[index].likes = postData[index].likes.filter(
          (userId) => userId !== userInfo?._id
        );
      } else {
        postData[index].likes.push(userInfo?._id);
      }
      console.log(postData);
      return postData;
    });
  };

  const handleSavePost = (e) => {
    e.stopPropagation();
    savePost.mutateAsync(post._id);
    setIsSaved(!isSaved);
  };
  return (
    <div className="flex justify-between items-center z-20">
      <div className="flex gap-2 mr-5">
        <img
          src={`${
            post.likes.some((id) => id === userInfo?._id)
              ? "/assets/icons/liked.svg"
              : "/assets/icons/like.svg"
          }`}
          alt="like"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleLikePost}
        />
        <p className="small-medium lg:large-medium">{post?.likes?.length}</p>
      </div>
      <div className="flex gap-2 ">
        <img
          src={`${
            isSaved ? "/assets/icons/saved.svg" : "/assets/icons/save.svg"
          }`}
          alt="save"
          width={20}
          height={20}
          className="cursor-pointer"
          onClick={handleSavePost}
        />
      </div>
    </div>
  );
};

export default PostStats;
