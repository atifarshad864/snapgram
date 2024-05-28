import React from "react";
import { useGetRecentPosts } from "@/lib/react-query/queries";
// import Loader from "@/components/shared/Loader";
import PageContainer from "./PageContainer";

const UserPosts = () => {
  const { isPending, data, isError } = useGetRecentPosts();
  //   const { data: postData = [] } = data.data ?? {};

  return (
    <div className="mt-12">
      <PageContainer loading={isPending}>
        <ul
          className=" grid grid-cols-3 gap-5"
          style={{
            gridTemplateColumns: "repeat(auto-fill, minmax(230px, 300px))",
          }}
        >
          {data?.data?.data?.map((post) => (
            <li key={post._id} className="">
              {/* <p>{post.caption}</p> */}
              <img
                src={
                  `http://localhost:3000/images/${post.imageId}` ||
                  "/assets/icons/profile-placeholder.svg"
                }
                alt="post image"
                className="rounded-lg object-cover"
                style={{
                  aspectRatio: "4/3",
                }}
              />
            </li>
          ))}
        </ul>
      </PageContainer>
    </div>
  );
};

export default UserPosts;
