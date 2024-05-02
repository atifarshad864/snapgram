import React from "react";
import { useGetRecentPosts } from "@/lib/react-query/queries";
import Loader from "@/components/shared/Loader";
import PageContainer from "./PageContainer";

const UserPosts = () => {
  const { isPending, data, isError } = useGetRecentPosts();
  //   const { data: postData = [] } = data.data ?? {};

  return (
    <div className="mt-12">
      <PageContainer loading={isPending}>
        <ul className="grid-container">
          {data?.data?.data?.map((post) => (
            <li key={post._id}>
              {/* <p>{post.caption}</p> */}
              <img
                src={
                  `http://localhost:3000/images/${post.imageId}` ||
                  "/assets/icons/profile-placeholder.svg"
                }
                alt="post image"
                className="rounded-lg size-60 object-cover"
              />
            </li>
          ))}
        </ul>
      </PageContainer>
    </div>
  );
};

export default UserPosts;
