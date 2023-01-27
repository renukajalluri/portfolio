import React from "react";

export const AboutMe = () => {
  const heading = [{ name: "About Me" }];
  const skills = [
    { name: "Html" },
    { name: "Css" },
    { name: "Reactjs" },
    { name: "Nextjs" },
    { name: "Expressjs" },
    { name: "MongoDB" },
  ];
  return (
    <div
      data-aos="fade-left"
      data-aos-duration="1000"
      data-aos-once="false"
      // data-aos-delay="60"
      // data-aos-easing="ease-in-out"
      id="about"
      className=" md:my-24  xs:max-w-xl xs:p-4 lg:max-w-3xl md:max-w-xl xl:my-44   sm:max-w-md max-w-xs  flex  mx-auto h-auto"
    >
      <div className="flex flex-col justify-start">
        <ul className="flex">
          {heading.map((h, i) => {
            return (
              <li
                key={i}
                // lg:mt-3
                className="text-primary listNone font-bold hover:text-secondary aboutMeHeading md:inline-block   md:my-0 my-6   duration-300"
              >
                <span className="font-family text-secondary text-xl">
                  0{i + 1}.
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
        <div className="grid lg:grid-cols-4 sm:grid-cols-1 gap-1">
          <div className="tracking-widest col-span-4 leading-7">
            <div className="text-aboutColor xs:max-w-xl xs:p-4 lg:max-w-2xl md:max-w-xl -ml-3   sm:max-w-md max-w-xs ">
              <p className="lg:max-w-7xl">
                {" "}
                I am a Research-oriented person & ardent learner, keeps updated
                with cutting-edge technologies and utilize my skills for the
                growth of the organisation
              </p>
            </div>
            <div className="text-aboutColor ml-1 my-1">
              <p>
                I&apos;m a Skilled Web Developer with expertise in designing and
                developing Full Stack Web Applications. Professional in popular
                Web Frameworks & Libraries like React Js,Next Js,Express,Node.js
                etc.
              </p>
            </div>

            <div className="text-aboutColor ml-1 my-2 tracking-widest">
              <p>
                Here are a few technologies I&apos;ve been working with (find
                details in Resume):
              </p>
            </div>
            <div className="text-aboutColor ml-1 my-3 tracking-widest">
              <h6 className="font-bold my-3">Web Developement :</h6>
              <p className="my-3">
                Front End : HTML , CSS , JavaScript , React Js
              </p>
              <p className="my-3">Backend : Express , Flask , Django</p>
              <p className="my-3">
                Design Frameworks - Bootstrap, Material Design, Tailwind CSS
              </p>
              <p className="my-3">Database : SQL, MongoDB</p>
            </div>
          </div>
          {/* profile image */}
          {/* <div className="group w-full  my-10 h-80  ">
            <div className="group   h-96 w-64 [perspective:1000px] before:bg-secondary before:mix-blend-screen	  md:w-72">
              <div className="cursor-pointer relative h-full w-full rounded-xl shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                <div className="absolute inset-0 ">
                  <img
                    src="../images/profile-image.jpeg"
                    className=" h-full w-full rounded-xl shadow-xl object-cover backdrop-grayscale "
                    alt=""
                  />
                </div>
                <div className=" absolute inset-0 h-full w-full rounded-xl bg-black/40 px-2 text-center text-lightSlate [transform:rotateY(180deg)] [backface-visibility:hidden]">
                  <div className=" flex w-full min-h-full flex-col items-center justify-center">
                    <h1 className="text-3xl w-full font-semibold">
                      Renuka Bhagyasri
                    </h1>
                    <p className="text-lg">MERN Developer</p>
                    <p className="text-base">
                      I’m an independent web developer who is passionate about
                      brining client’s visions to life.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
