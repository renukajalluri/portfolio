import React from "react";

export const Email = () => {
  return (
    <div className="md:fixed md:right-10 md:bottom-0 md:z-10 sm:hidden md:block hidden text-lightSlate">
      <ul className="listNone text-lightSlate font-nav  text-sm md:flex md:justify-center md:flex-col md:items-center">
        <li className="verticalText md:hover:-translate-y-0.5 md:hover:text-secondary md:transition">
          <a href="mailto:renukajalluri20@gmail.com">
            renukajalluri20@gmail.com
          </a>
        </li>
        <li className="md:pt-6 ">
          <div className="md:border-l-2 md:border-lightSlate md:h-32 "></div>
        </li>
      </ul>
    </div>
  );
};
