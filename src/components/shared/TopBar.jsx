import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "../ui/button";
// import { SignOut } from "@/lib/api-functions/api";
import { useGetRecentPosts } from "@/lib/react-query/queries";
const TopBar = ({ userInfo }) => {
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
  const { isPending, data, isError } = useGetRecentPosts();

  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/sign-in");
  };
  return (
    <section className="topbar">
      <div className="flex-between py-4 px-5">
        <Link to="/" className="flex gap-3 items-center">
          <img
            src="/assets/images/logo.svg"
            alt="logo"
            width={130}
            height={325}
          />
        </Link>
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            className="shad-button_ghost"
            onClick={() => handleSignOut()}
          >
            <img src="/assets/icons/logout.svg" alt="logo" />
          </Button>
          <img
            src={`http://localhost:3000/images/${userInfo?.imageId}`}
            alt="profile picture"
            className="rounded-full size-8"
          />
          {/* <Link to="/profile">
            <img
              src={
                `http://localhost:3000/images/${1713423076839}` ||
                "/assets/icons/profile-placeholder.svg"
              }
              alt="post image"
              className="post-card_img"
            /> */}
          {/* <img src={user.imgURL || "/assets/images/profile.png"} alt="user" /> */}
          {/* </Link> */}
        </div>
      </div>
    </section>
  );
};

export default TopBar;
