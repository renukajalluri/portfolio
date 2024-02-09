import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";

export const SocialIcons = () => {
  return (
    <div className="md:left-10 md:bottom-0 md:fixed z-10 sm:hidden hidden md:block">
      <ul className="listNone  text-lightSlate text-xl md:flex md:justify-center md:flex-col md:items-center">
        <li className="md:py-6 md:hover:text-secondary md:hover:-translate-y-0.5 md:transition ">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/renukajalluri"
          >
            <FiGithub />
          </a>
        </li>
        <li className="md:py-6 md:hover:text-secondary md:hover:-translate-y-0.5 md:transition">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jallurirenuka/"
          >
            <FiLinkedin />
          </a>
        </li>
        {/* <li className="md:py-6 md:hover:text-secondary md:hover:-translate-y-0.5 md:transition">
          <a href="#">
            <AiOutlineInstagram />
          </a>
        </li> */}
        <li className="md:pt-10 md:hover:text-secondary md:transition">
          <div className="md:border-l-2 md:border-lightSlate md:h-32 "></div>
        </li>
      </ul>
    </div>
  );
};
