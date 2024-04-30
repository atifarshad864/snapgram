import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import TopBar from "@/components/shared/TopBar";
import { useGetuserInfo } from "@/lib/react-query/queries";
import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  const { isPending, data, isError } = useGetuserInfo();
  // console.log(data);
  return (
    <div className="w-full md:flex">
      <Link to="/profile">
        <TopBar userInfo={data?.data?.data} />
        <LeftSideBar userInfo={data?.data?.data} />
      </Link>
      <section className="flex flex-1 h-full">
        <Outlet />
      </section>
      <BottomBar />
    </div>
  );
};

export default RootLayout;
