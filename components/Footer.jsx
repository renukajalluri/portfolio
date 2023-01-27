import React from "react";
import { FiGithub } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { AiOutlineInstagram } from "react-icons/ai";
export const Footer = () => {
  return (
    <div className=" absolute w-full  mx-auto my-5 ">
      <ul className="md:hidden  listNone max-w-7xl w-full flex-row text-lightSlate text-xl flex items-center justify-center align-middle ">
        <li className=" hover:text-secondary  transition px-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://github.com/renukajalluri"
          >
            <FiGithub />
          </a>
        </li>
        <li className="hover:text-secondary  transition px-5">
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/jallurirenuka/"
          >
            <FiLinkedin />
          </a>
        </li>
        <li className="hover:text-secondary  transition px-5">
          <a href="#">
            <AiOutlineInstagram />
          </a>
        </li>
      </ul>
      <div className="items-center  mx-auto   text-lightSlate flex justify-center w-full my-3 ">
        <h1 className="hover:text-secondary letterSpacing font-family">
          Designed by Renuka
        </h1>
      </div>
    </div>
  );
};
