import React from "react";
import BottomBar from "@/components/shared/BottomBar";
import LeftSideBar from "@/components/shared/LeftSideBar";
import TopBar from "@/components/shared/TopBar";
import { useGetuserInfo } from "@/lib/react-query/queries";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  const { isPending, data, isError } = useGetuserInfo();
  // console.log(data);
  return (
    <div className="w-full md:flex">
      <TopBar userInfo={data?.data?.data} />
      <LeftSideBar userInfo={data?.data?.data} />
      <section className="h-full flex-1">
        <Outlet />
      </section>
      <BottomBar />
    </div>
  );
};

export default RootLayout;
