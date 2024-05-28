import Loader from "@/components/shared/Loader";
import { Button } from "@/components/ui/button";
import { useGetRandomUsers } from "@/lib/react-query/queries";
import React from "react";

const AllUsers = () => {
  const { data, isPending, isError } = useGetRandomUsers();
  console.log(data);
  return (
    <>
      {/* {/* <div className="flex m-8 gap-3">
        
      </div> */}
      <div className="justify-around">
        <div className=" flex m-6">
          <img
            src="/assets/icons/allusers.png"
            alt="loader"
            className="size-12 object-fit"
          />
          <h2 className="h3-bold md:h2-bold text-left w-full">Random Users</h2>
        </div>
        {isPending ? (
          <Loader />
        ) : (
          <ul className="grid grid-cols-3 gap-8 m-5 justify-around">
            {data?.data?.users?.map((users) => (
              <li
                key={users.id}
                className=" rounded-lg border-2 border-gray-700 p-12 gap-7	"
              >
                <div className="text-center ">
                  <img
                    src={users.image}
                    alt="Profile Picture"
                    className=" rounded-full size-40"
                  />
                  <h1 className=" font-bold text-2xl">{users.firstName}</h1>
                  <h1>@{users.username}</h1>
                </div>
                <Button className="shad-button_primary w-20 m-auto">
                  Follow
                </Button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </>
  );
};
export default AllUsers;
