import React, { useEffect, useState, useRef } from "react";

export const WorkExperience = () => {
  const [activeTabId, setActiveTabId] = useState(0);
  const [tabFocus, setTabFocus] = useState(null);
  const tabs = useRef([]);

  //   const revealContainer = useRef(null);
  //   useEffect(() => sr.reveal(revealContainer.current, srConfig()), []);

  const focusTab = () => {
    if (tabs.current[tabFocus]) {
      tabs.current[tabFocus].focus();
    } else {
      // If we're at the end, go to the start
      if (tabFocus >= tabs.current.length) {
        setTabFocus(0);
      }
      // If we're at the start, move to the end
      if (tabFocus < 0) {
        setTabFocus(tabs.current.length - 1);
      }
    }
  };

  // Only re-run the effect if tabFocus changes
  useEffect(() => focusTab(), [tabFocus]);

  const onKeyPressed = (e) => {
    if (e.keyCode === 38 || e.keyCode === 40) {
      e.preventDefault();
      if (e.keyCode === 40) {
        // Move down
        setTabFocus(tabFocus + 1);
      } else if (e.keyCode === 38) {
        // Move up
        setTabFocus(tabFocus - 1);
      }
    }
  };
  const heading = [{ name: "Where I’ve Worked" }];

  const data = [
    {
      companyName: "TechPranee",
    },
    {
      companyName: "Coding Ninjas",
    },
    {
      companyName: "WebsiteWaale.in",
    },
  ];
  const projects = ["https://www.neithedu.com/", "https://app.motowipe.in/"];

  const experienceData = [
    // Working on an educational website https://www.neithedu.com the technologies that i have been used HTML, CSS, JAVASCRIPT, REACTJS, MATERIAL UI. Developing a progressive web app https://app.motowipe.in/ the technologies that I have been used HTML, CSS, JAVASCRIPT, REACTJS, MATERIAL UI. And redesigned few websites Techpranee, varasiddi, MohanElectronics.

    {
      heading: "Frontend Developer",
      companyName: "TechPranee",
      companyWebsite: "https://techpranee.com/",
      duration: "Nov 2022 - Present",
      description: [
        `Working on an educational website ${projects[0]}, technologies that i have been used Html, Css, JavaScript, Reactjs and  Material UI. Employed lazy loading techniques to improve site speed. Implemented Razorpay integration. Implemented role-based authorization in ReactJS using tools such as Overmind and React Router to restrict access to certain pages and features based on user roles.`,
        `Developing a progressive web app ${projects[1]}, technologies that I have been used Html, Css, JavaScript, Reactjs and  Material UI.`,
        "Revamping few websites Techpranee, varasiddi, MohanElectronics.",
      ],
      description1: `Working on an educational website ${projects[0]}, technologies that i have been used Html, Css, JavaScript, Reactjs and  Material UI. Employed lazy loading techniques to improve site speed. Implemented Razorpay integration. Implemented role-based authorization in ReactJS using tools such as Overmind and React Router to restrict access to certain pages and features based on user roles.`,
      description2: `Developing a progressive web app ${projects[1]}, technologies that I have been used Html, Css, JavaScript, Reactjs and  Material UI. Worked on Firebase Login authentication and Firebase otp verification.`,
      description3:
        "Revamping few websites Techpranee, varasiddi, MohanElectronics.",

      skills: [
        "Html ",
        "Css",
        "ReactJs",
        " NextJs",
        "Material UI",
        "Tailwind Css",
      ],
    },
    {
      heading: "Teaching Assistant",
      companyName: "Coding Ninjas",
      companyWebsite: "https://www.codingninjas.com/",
      duration: "Sept 2022 - Jan 2023",
      certificate:
        "https://ninjasfiles.s3.amazonaws.com/certificate5822ac81d6c6771cf14fdd2536f836345128.pdf",

      // description: [
      //   "I worked as teaching assistant for Full Stack Web Development. Responsible for mentoring and resolving doubts of students enrolled in Full Stack Web Development , Basics of Full Stack Development - MERN stack ",
      //   "I successfully mentored 676 students and resolved 1.5k doubts and evaluated 34 projects with an average rating of 4.87 out of 5.",
      // ],
      description1:
        "I worked as teaching assistant for Full Stack Web Development. Responsible for mentoring and resolving doubts of students enrolled in Full Stack Web Development , Basics of Full Stack Development - MERN stack ",
      description2:
        "I successfully mentored 676 students and resolved 1.5k doubts and evaluated 34 projects with an average rating of 4.87 out of 5.",
      skills: [
        "Html ",
        "Css",
        "Bootstrap",
        "JavaScript",
        "ReactJs",
        "Express Js",
        "MongoDB",
      ],
    },
    {
      heading: "MERN Developer",
      companyName: "WebsiteWale.in",
      companyWebsite: "#",
      duration: "June 2022 - Sept 2022",
      // description: [
      //   "In this internship I worked as MERN Developer and worked on two projects Issue Tracking Tool and Take Away websites ",
      // ],
      description1:
        "In this internship I worked as MERN Developer and worked on two projects Issue Tracking Tool and Take Away websites ",
      skills: [
        "Html ",
        "Css",
        "ReactJs",
        "NextJs",
        "Material UI",
        "Express Js",
        "MongoDB",
      ],
    },
  ];

  experienceData.map((e) => {
    const descriptionWithLink = e.description3;
    // .replace(
    //   /https?:\/\/[\w\-.]+\.[a-zA-Z]{2,}(\/\S*)?/,
    //   '<a href="$&" target="_blank" rel="noopener noreferrer">$&</a>'
    // );
    console.log(descriptionWithLink);
  });

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="false"
      id="experience"
      className=" md:my-24 relative xl:my-48  xs:max-w-xl xs:p-4 lg:max-w-2xl md:max-w-xl lg:p-0   sm:max-w-md max-w-xs  flex  mx-auto h-auto"
    >
      <div className="flex flex-col justify-start">
        {/* heading starts */}
        <ul className="flex">
          {heading.map((h, i) => {
            return (
              <li
                key={i}
                // lg:mt-3
                className="text-primary listNone font-bold  hover:text-secondary aboutMeHeading md:inline-block   md:my-0 my-6   duration-300"
              >
                <span className="font-family text-secondary text-xl">
                  0{i + 2}.
                </span>{" "}
                {h.name}
              </li>
            );
          })}
          <ul>
            <li
              style={{ height: "1px" }}
              className="listNone text-lightestNavy bg-lightestNavy   after:content-[''] after:lg:w-52 flex ml-3   mt-6"
            ></li>
          </ul>
        </ul>
        {/* heading ends */}

        {/* work data starts */}

        {/* for mobile view starts */}

        <div className="sm:block  md:hidden max-w-sm  my-1 ">
          {/* w-full */}
          <ul
            role="tablist"
            aria-label="Job Tabs"
            onKeyDown={(e) => onKeyPressed(e)}
            className="  	overflow-y-auto listNone flex flex-row gap-1 "
          >
            {data.map((d, i) => {
              return (
                <li
                  className={`${
                    activeTabId === i
                      ? "text-secondary font-family  transition-opacity delay-100   bg-lightNavy border-b-2 border-secondary "
                      : "border-b-2 font-family border-lightNavy text-aboutColor "
                  } cursor-pointer py-4 px-3 font-family  `}
                  key={i}
                  onClick={() => setActiveTabId(i)}
                  id={`tab-${i}`}
                  aria-controls={`panel-${i}`}
                  ref={(el) => (tabs.current[i] = el)}
                  role="tab"
                  aria-selected={activeTabId === i ? true : false}
                  tabIndex={activeTabId === i ? "0" : "-1"}
                >
                  {d.companyName}
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="py-6 sm:block  md:hidden  md:w-full text-primary listNone content mr-auto justify-end ">
          {experienceData.map((e, i) => {
            return (
              <li
                key={i}
                // isActive={activeTabId === i}
                id={i}
                role="tabpanel"
                aria-labelledby={`${i}`}
                tabIndex={activeTabId === i ? "0" : "-1"}
                hidden={activeTabId !== i}
                className="ease-in-out delay-1000"
              >
                <div className="flex flex-col transition-all ease-in-out delay-1000">
                  <div className="flex flex-col">
                    <div className="font-semibold text-xl">
                      <span className=" pr-2"> {e.heading}</span>
                      <span className="text-secondary">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href={e.companyWebsite}
                        >
                          @{e.companyName}
                        </a>
                      </span>
                    </div>
                    <div>
                      <p className="text-lightSlate text-xs font-family">
                        {e.duration}
                      </p>
                    </div>
                  </div>

                  <div className="mt-5 ">
                    <ul
                      style={{ fontSize: "15px" }}
                      className="flex flex-col  listNone tracking-wide leading-6 text-aboutColor"
                    >
                      <li className="flex gap-2 my-2">
                        <div>
                          <span className="   text-secondary">▹</span>
                        </div>
                        <div>
                          <span className="  items-start">
                            {e.description1}
                          </span>
                        </div>
                      </li>

                      {e.description2 ? (
                        <li className="flex gap-2 my-2">
                          <div>
                            <span className="   text-secondary">▹</span>
                          </div>
                          <div>
                            <span className="  items-start">
                              {e.description2}
                            </span>
                          </div>
                        </li>
                      ) : (
                        ""
                      )}
                      {e.description3 ? (
                        <li className="flex gap-2 my-2">
                          <div>
                            <span className="text-secondary">▹</span>
                          </div>
                          <div>
                            <span className="  items-start">
                              {/* readdyy */}
                              {e.description3}
                            </span>
                          </div>
                        </li>
                      ) : (
                        ""
                      )}
                      <li className="flex gap-2">
                        <div>
                          <span className="  text-secondary">▹</span>
                        </div>
                        <div>
                          <span className="mr-1 font-bold pr-0.5">Skills:</span>
                          {e.skills.join(" . ")}
                        </div>
                      </li>
                      {e.certificate ? (
                        <li className="flex justify-start mt-5 -ml-7">
                          <div className="p-2 pb-2 md:ml-10 ml-6  w-32 text-center hover:bg-secondary hover:bg-opacity-10 cursor-pointer  align-middle items-center  border-secondary rounded border-2">
                            <a
                              href={e.certificate}
                              target="_blank"
                              rel="noreferrer"
                              className="  text-secondary  "
                            >
                              View Certificate
                            </a>
                          </div>
                        </li>
                      ) : (
                        ""
                      )}
                    </ul>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* for mobile view ends */}

        <div className="sm:hidden xs:hidden md:block w-full my-8 ">
          <div className=" flex gap-5  justify-between">
            <ul
              role="tablist"
              aria-label="Job Tabs"
              onKeyDown={(e) => onKeyPressed(e)}
              className="w-44 listNone py-6 px-0  tabsTransition"
            >
              {data.map((d, i) => {
                return (
                  <li
                    className={`${
                      activeTabId === i
                        ? "text-secondary  transition-opacity delay-100   bg-lightNavy border-l-2 border-secondary "
                        : "border-l-2 border-lightNavy text-aboutColor "
                    } cursor-pointer md:w-full  py-4 px-3 font-family 	 `}
                    key={i}
                    onClick={() => setActiveTabId(i)}
                    id={`tab-${i}`}
                    aria-controls={`panel-${i}`}
                    ref={(el) => (tabs.current[i] = el)}
                    role="tab"
                    aria-selected={activeTabId === i ? true : false}
                    tabIndex={activeTabId === i ? "0" : "-1"}
                  >
                    {d.companyName}
                  </li>
                );
              })}
            </ul>
            <ul className="py-6  md:w-full text-primary listNone content mr-auto justify-end ">
              {experienceData.map((e, i) => {
                return (
                  <li
                    key={i}
                    // isActive={activeTabId === i}
                    id={i}
                    role="tabpanel"
                    aria-labelledby={`${i}`}
                    tabIndex={activeTabId === i ? "0" : "-1"}
                    hidden={activeTabId !== i}
                    className="ease-in-out delay-1000"
                  >
                    <div className="flex flex-col transition-all ease-in-out delay-1000">
                      <div className="flex flex-col">
                        <div className="font-semibold text-xl">
                          <span className=" pr-2"> {e.heading}</span>
                          <span className="text-secondary">
                            <a
                              target="_blank"
                              rel="noreferrer"
                              href={e.companyWebsite}
                            >
                              @{e.companyName}
                            </a>
                          </span>
                        </div>
                        <div>
                          <p className="text-lightSlate text-xs font-family">
                            {e.duration}
                          </p>
                        </div>
                      </div>

                      <div className="mt-5 ">
                        <ul
                          style={{ fontSize: "15px" }}
                          className="flex flex-col  listNone tracking-wide leading-6 text-aboutColor"
                        >
                          <li className="flex gap-2 my-2">
                            <div>
                              <span className="   text-secondary">▹</span>
                            </div>
                            <div>
                              <span className="  items-start">
                                {" "}
                                {e.description1}
                              </span>
                            </div>
                          </li>

                          {e.description2 ? (
                            <li className="flex gap-2 my-2">
                              <div>
                                <span className="   text-secondary">▹</span>
                              </div>
                              <div>
                                <span className="  items-start">
                                  {" "}
                                  {e.description2}
                                </span>
                              </div>
                            </li>
                          ) : (
                            ""
                          )}
                          {e.description3 ? (
                            <li className="flex gap-2 my-2">
                              <div>
                                <span className="   text-secondary">▹</span>
                              </div>
                              <div>
                                <span className="  items-start">
                                  {" "}
                                  {e.description3}
                                </span>
                              </div>
                            </li>
                          ) : (
                            ""
                          )}
                          <li className="flex gap-2">
                            <div>
                              <span className="  text-secondary">▹</span>
                            </div>
                            <div>
                              <span className="mr-1 font-bold pr-0.5">
                                Skills:
                              </span>
                              {e.skills.join(" . ")}
                            </div>
                          </li>
                          {e.certificate ? (
                            <li className="flex justify-start mt-5 -ml-7">
                              <div className="p-2 pb-2 md:ml-10 ml-6  w-32 text-center hover:bg-secondary hover:bg-opacity-10 cursor-pointer  align-middle items-center  border-secondary rounded border-2">
                                <a
                                  href={e.certificate}
                                  target="_blank"
                                  rel="noreferrer"
                                  className="  text-secondary  "
                                >
                                  View Certificate
                                </a>
                              </div>
                            </li>
                          ) : (
                            ""
                          )}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
          <div></div>
        </div>

        {/* work data ends */}
      </div>
    </div>
  );
};
