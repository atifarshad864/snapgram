import React from "react";
import { sidebarLinks } from "@/constants";
import { Button } from "../ui/button";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const LeftSideBar = () => {
  const navigate = useNavigate();
  const { pathName } = useLocation();
  const handleSignOut = () => {
    localStorage.removeItem("accessToken");
    navigate("/sign-in");
  };
  return (
    <div>
      <nav className="leftsidebar">
        <div className="flex flex-col gap-11">
          <Link to="/" className="flex gap-3 item-center">
            <img
              src="/assets/images/logo.svg"
              alt="logo"
              width={170}
              height={36}
            />
          </Link>
          <ul className="flex flex-col ">
            {sidebarLinks?.map((link) => {
              const isActive = pathName === link.route;
              return (
                <li
                  key={link.label}
                  className={`leftsidebar-link group ${
                    isActive && "bg-primary-500"
                  }`}
                >
                  <NavLink
                    to={link.route}
                    className="flex gap-10 items-center p-4"
                  >
                    <img
                      src={link.imgURL}
                      alt="link.label"
                      className={`group-hover:invert-white ${
                        isActive && "invert-white"
                      }`}
                    />
                    {link.label}
                  </NavLink>
                </li>
              );
            })}
          </ul>
        </div>
        <Button
          variant="ghost"
          className="shad-button_ghost"
          onClick={() => handleSignOut()}
        >
          <img src="/assets/icons/logout.svg" alt="logo" />
          <p className="small-medium  lg:base-medium p-4">Logout</p>
        </Button>
      </nav>
    </div>
  );
};

export default LeftSideBar;
