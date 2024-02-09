import { useState } from "react";
import { BiMenuAltRight } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
const Nav = () => {
  let [open, setopen] = useState(false);
  const menus = [
    { name: "About", url: "#about" },
    { name: "Experience", url: "#experience" },
    { name: "Work", url: "#work" },
    { name: "Contact", url: "#contact" },
  ];
  return (
    // NAVBAR

    <nav
      data-aos="fade-up"
      data-aos-duration="1000"
      data-aos-once="false"
      // fadeIn
      className=" bg-bgColor  font-nav font-family  text-primary flex items-center justify-between pt-5 "
    >
      <div
        onClick={() => setopen(!open)}
        className="md:hidden  fixed right-5 cursor-pointer  text-5xl text-secondary z-20 top-3"
      >
        {open ? (
          <AiOutlineClose className="text-4xl" />
        ) : (
          <BiMenuAltRight className="font-normal " />
        )}
      </div>

      <div className="px-4">
        <h1 className="text-xl font-semibold  first-letter:text-secondary first-letter:font-bold first-letter:text-3xl">
          <a href="#">
            Renuka<span>.</span>
          </a>
        </h1>
      </div>
      <div className={`md:flex items-center `}>
        <ul
          //pt-36
          // justify-center inline-block  text-left flex-col
          className={`marker:text-secondary pt-36   pr-16 md:pt-0 md:flex items-center bg-lightNavy md:bg-bgColor md:pl-10  md:static fixed duration-500 ease-linear top-0 md:h-auto h-screen z-10 
          ${!open ? "right-[-100%] " : "right-0 "}`}
        >
          {menus.map((menu, index) => (
            <li
              key={index}
              // lg:mt-3
              className="md:inline-block  md:ml-12 ml-5 md:my-0 my-6   duration-300"
            >
              <a
                href={menu.url}
                className="hover:text-secondary text-primary cursor-pointer font-Barlow font-normal text-sm inline-block md:py-5 py-3"
              >
                <span className=" mr-1 text-secondary">0{index + 1}.</span>{" "}
                {menu.name}
              </a>
            </li>
          ))}
          {/* lg:mt-3 */}
          <ul className="list-none ">
            <li className="">
              <div className="p-2 pb-2 md:ml-10 ml-6  w-32 text-center hover:bg-secondary hover:bg-opacity-10 cursor-pointer  align-middle items-center  border-secondary rounded border-2">
                <a
                  href="/pdf/resume_1.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="text-secondary  "
                >
                  Resume
                </a>
              </div>
            </li>
          </ul>
        </ul>
      </div>
    </nav>

    // Navbar
  );
};
export default Nav;
