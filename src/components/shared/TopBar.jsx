import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
const TopBar = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (isSuccess) {
  //     navigate(0); // 0 means navigte to us sign-in-up screen
  //   }
  // }, [isSuccess]); // depdency array to check if success
  return (
    <section className="topbar">
      <div className=" flex-between py-4 px-5">
        <Link to="/">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>
        <div className="flex gap-4">
          <Button variant="ghost" className="shad-button_ghost">
            onclick={() => signOut}
            <img src="/assets/icons/logout.svg" />
          </Button>
          {/* <Link to={`/profile/${user.id}`} className="flex-center gap-3">
            <img src={user.imgURL || "/assets/images/profile.png"} alt="user" />
          </Link> */}
        </div>
      </div>
    </section>
  );
};

export default TopBar;
