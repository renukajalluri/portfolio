import React, { useState, useEffect } from "react";
// import Slider from "react-slick";
// import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import {
  // FiChevronRight,
  // FiChevronLeft,
  FaExternalLinkAlt,
} from "react-icons/fa";
// import { FaQuoteRight } from "react-icons/fa";

export const Projects = () => {
  const heading = [{ name: "Some Things I’ve Built" }];

  const issueTrackingToolImage = [
    {
      id: 1,
      url: "/images/jira/login.jpg",
    },
    {
      id: 2,
      url: "/images/jira/projectBoard-manager-1.jpg",
    },
    {
      id: 3,

      url: "/images/jira/create_issue_manager.png",
    },
    {
      id: 4,

      url: "/images/jira/create_project_manager.jpg",
    },
    {
      id: 5,

      url: "/images/jira/signup-1.jpg",
    },
    {
      id: 6,

      url: "/images/jira/project_details_manager.jpg",
    },
    {
      id: 7,

      url: "/images/jira/issue_details_manager.jpg",
    },
  ];

  const takeAwayImages = [
    {
      id: 1,
      url: "/images/take-away/signup.jpg",
    },
    {
      id: 2,

      url: "/images/take-away/otp.jpg",
    },
    {
      id: 3,
      url: "/images/take-away/login.jpg",
    },
    {
      id: 4,

      url: "/images/take-away/resto_profile.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [issueImages, setIssueImages] = useState(issueTrackingToolImage);
  const [takeAwayImgs, setTakeAwayImgs] = useState(takeAwayImages);

  const [index, setIndex] = useState(0);
  const [takeAwayIndex, setTakeAwayIndex] = useState(0);
  useEffect(() => {
    const lastIndex = issueImages.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, issueImages]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [index]);

  // take away

  useEffect(() => {
    let slider = setInterval(() => {
      setTakeAwayIndex(index + 1);
    }, 3000);
    return () => clearInterval(slider);
  }, [takeAwayIndex]);

  useEffect(() => {
    const lastIndex = takeAwayImgs.length - 1;
    if (takeAwayIndex < 0) {
      setTakeAwayIndex(lastIndex);
    }
    if (takeAwayIndex > lastIndex) {
      setTakeAwayIndex(0);
    }
  }, [takeAwayIndex, takeAwayImgs]);

  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="false"
      id="work"
      className="md:my-24 relative  xs:max-w-xl xs:p-4 lg:max-w-4xl xl:max-w-6xl  md:max-w-xl lg:p-3   sm:max-w-md max-w-xs  flex  mx-auto h-auto"
    >
      <div className="flex flex-col justify-start w-full">
        <ul className="flex justify-center mx-auto text-center  w-full ">
          {heading.map((h, i) => {
            return (
              <li
                key={i}
                // lg:mt-3
                className="text-primary listNone font-bold hover:text-secondary aboutMeHeading md:inline-block   md:my-0 my-6   duration-300"
              >
                <span className="font-family text-secondary text-xl">
                  0{i + 3}.
                </span>{" "}
                {h.name}
              </li>
            );
          })}
        </ul>
        {/* take away */}
        <div className="lg:grid-cols-4 grid xl:grid-cols-4 md:grid-cols-1 gap-11   w-full h-auto   my-4 ">
          <div className="flex flex-col col-span-2">
            {/* <div> */}
            <div className="flex w-full   ">
              <div
                style={{ height: "2px" }}
                className="listNone text-lightestNavy bg-lightestNavy   after:content-[''] after:lg:w-52 flex ml-3   mt-6"
              ></div>
              <h1 className="text-secondary mb-4 mt-2 ml-2 text-2xl  font-semibold w-full flex  ">
                <span> Take Away</span>
                {/*<span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://take-away-frontend.vercel.app"
                    className=""
                  >
                    <FaExternalLinkAlt className="text-sm font-light ml-3 mt-3" />{" "}
                  </a>
        </span>*/}
              </h1>
              {/* </div> */}
            </div>
            <div className="lg:block xl:block section-center md:hidden sm:hidden xs:hidden">
              {takeAwayImgs.map((person, personIndex) => {
                const { id, url } = person;
                let position = "nextSlide";
                if (personIndex === takeAwayIndex) {
                  position = "activeSlide";
                }
                if (
                  personIndex === takeAwayIndex - 1 ||
                  (takeAwayIndex === 0 &&
                    personIndex === takeAwayImgs.length - 1)
                ) {
                  position = "lastSlide";
                }
                return (
                  <div key={id} className="flex flex-col">
                    <article className={position}>
                      <img src={url} alt="bg" className="person-img" />
                    </article>
                  </div>
                );
              })}
            </div>

            <div className="xl:hidden lg:hidden md:block sm:block xs:block">
              <div className="relative w-full h-72 bg-[url('/images/take-away/resto_profile.jpg')] bg-secondary opacity-50 bg-contain"></div>
              <div className="px-7 xs:px-4 xs:-mt-10  absolute top-[34%] text-center text-secondary">
                Developed a website where customer can order a food from
                different restaurants at a time and customer can pick the time
                for picking up the food. And also restaurant owner can update
                the restaurant timings, can update the menu, food
                status(available or not) and displaying the history of the
                orders
              </div>
            </div>
          </div>
          <div className="xl:mt-24 xl:block lg:block md:hidden sm:hidden xs:hidden  lg:h-[278px] lg:mt-32 z-20 col-span-2 w-full shadow-lg bg-lightNavy rounded-md xl:h-52  px-6 py-6 tracking-widest text-primary">
            Developed a website where customer can order a food from different
            restaurants at a time and customer can pick the time for picking up
            the food. And also restaurant owner can update the restaurant
            timings, can update the menu, food status(available or not) and
            displaying the history of the orders
          </div>
        </div>
        {/* take away */}

        {/* issue Tracking tool */}
        <div className="lg:grid-cols-4 grid xl:grid-cols-4 md:grid-cols-1 gap-11   w-full h-auto   my-4 ">
          <div className="flex flex-col col-span-2">
            <div className="flex w-full   ">
              <div
                style={{ height: "2px" }}
                className="listNone text-lightestNavy bg-lightestNavy   after:content-[''] after:lg:w-52 flex ml-3   mt-6"
              ></div>
              <h1 className="text-secondary mb-4 mt-2 ml-2 text-2xl  font-semibold w-full flex  ">
                <span> Issue Tracking Tool</span>
                {/* <span>
                  <a
                    target="_blank"
                    rel="noreferrer"
                    href="https://jira-fe-seven.vercel.app/login"
                    className=""
                  >
                    <FaExternalLinkAlt className="text-sm font-light ml-3 mt-3" />{" "}
                  </a>
                </span> */}
              </h1>
            </div>
            <div className="lg:block xl:block section-center md:hidden sm:hidden xs:hidden ">
              {issueImages.map((person, personIndex) => {
                const { id, url } = person;
                let position = "nextSlide";
                if (personIndex === index) {
                  position = "activeSlide";
                }
                if (
                  personIndex === index - 1 ||
                  (index === 0 && personIndex === issueImages.length - 1)
                ) {
                  position = "lastSlide";
                }
                return (
                  <div key={id} className="flex flex-col">
                    <article className={position}>
                      <img src={url} alt="bg" className="person-img" />
                    </article>
                  </div>
                );
              })}
            </div>

            <div className="xl:hidden lg:hidden md:block sm:block xs:block">
              <div className="relative w-full h-72 bg-[url('/images/jira/projectBoard-manager-1.jpg')] bg-secondary opacity-50 bg-contain"></div>
              <div className="px-7 xs:px-4 xs:-mt-10  absolute top-[76%] text-center text-secondary">
                Developed a project where the developers can track the issues
                and resolves the issues. There will be two roles like manager
                and developer. Where manager can create user accounts and can
                create projects and assign projects to developers. If there was
                any issue, developer can create an issue. So project relevant
                developers can resolve that issues.
              </div>
            </div>
          </div>
          <div className="xl:mt-24 xl:block lg:block md:hidden sm:hidden xs:hidden  lg:h-[278px] lg:mt-32 z-20 col-span-2 w-full shadow-lg bg-lightNavy rounded-md xl:h-52  px-6 py-6 tracking-widest text-primary">
            Developed a project where the developers can track the issues and
            resolves the issues. There will be two roles like manager and
            developer. Where manager can create user accounts and can create
            projects and assign projects to developers. If there was any issue,
            developer can create an issue. So project relevant developers can
            resolve that issues.
          </div>
        </div>
        {/* issue tracking tool */}
      </div>
    </div>
  );
};
