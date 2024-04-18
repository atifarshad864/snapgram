import React from "react";
import { bottombarLinks } from "@/constants";
import { Link, useLocation } from "react-router-dom";

const BottomBar = () => {
  const { pathName } = useLocation();
  return (
    <section className="bottom-bar flex flex-row">
      {bottombarLinks?.map((link) => {
        const isActive = pathName === link.route;
        return (
          <li key={link.label}>
            <Link
              to={link.route}
              className={` leftsidebar-link group  ${
                isActive && "bg-primary-500 rounded-[10px"
              } flex-center flex-col gap-1 p-2 transition`}
            >
              <img
                src={link.imgURL}
                alt="link.label"
                width={16}
                height={16}
                className={`group-hover:invert-white ${
                  isActive && "invert-white"
                }`}
              />
              <p className="tiny-medium text-light-2">{link.label}</p>
            </Link>
          </li>
        );
      })}
    </section>
  );
};

export default BottomBar;
