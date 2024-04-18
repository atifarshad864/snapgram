import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
// import { SignOut } from "@/lib/api-functions/api";
import { useMutation } from "@tanstack/react-query";
const TopBar = () => {
  // const SignOut = async () => {
  //   localStorage.removeItem("accessToken");
  // };
  // const navigate = useNavigate();
  // const { mutate } = useMutation(SignOut, {
  //   onSuccess: () => {
  //     navigate("/sign-in");
  //   },
  // });

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate(0); // 0 means navigte to us sign-in-up screen
  //   }
  // }, [isSuccess]); // depdency array to check if success
  const navigate = useNavigate();

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/sign-in");
  };
  return (
    <section className="topbar">
      <div className=" flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>
        <div className="flex gap-4">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => handleSignOut()}
          >
            <img src="/assets/icons/logout.svg" alt="logo" />
          </Button>
          {/* <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img src={user.imgURL || "/assets/images/profile.png"} alt="user" />
           </Link>   Don't understand */}
        </div>
      </div>
    </section>
  );
};

export default TopBar;
