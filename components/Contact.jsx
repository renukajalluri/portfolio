import React from "react";

export const Contact = () => {
  const heading = [{ name: "What’s Next?" }];

  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1000"
      data-aos-once="false"
      id="contact"
      className=" md:my-24 relative  xs:max-w-xl xs:p-4 lg:max-w-xl md:max-w-xl lg:p-0   sm:max-w-md max-w-xs  flex  mx-auto h-auto"
    >
      <div className="flex flex-col text-center justify-center w-full">
        <ul className="flex text-sm  text-center">
          {heading.map((h, i) => {
            return (
              <li
                key={i}
                // lg:mt-3
                className="text-secondary w-full listNone font-normal md:inline-block font-family  md:my-0 my-6   duration-300"
              >
                <span className="font-family text-secondary ">0{i + 4}.</span>{" "}
                {h.name}
              </li>
            );
          })}
        </ul>
        <div className="text-primary font-bold contactHeading">
          <h1>Get In Touch</h1>
        </div>
        <div>
          <p className="text-primaryLight text-[17px] font-normal tracking-wider">
            I &apos; m actively connecting with peers who are in to Web
            Developement my inbox is always open. Whether you have a question or
            just want to say hi, I &apos;ll try my best to get back to you!
          </p>
        </div>

        <div className=" my-16 text-center w-full  ">
          <a
            href="mailto:renukajalluri20@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="font-family  text-secondary py-4 px-10 w-11 hover:bg-secondary hover:bg-opacity-10 cursor-pointer    border-secondary rounded border-2 "
          >
            Say Hello
          </a>
        </div>
      </div>
    </div>
  );
};
