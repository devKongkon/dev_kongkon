import { useEffect, useState } from "react";
import Hamburger from "hamburger-react";

import { heroBg, ThemeBtn } from "../index";
import { HashLink as Link } from "react-router-hash-link";
import GradientWrapper from "../GradientWrapper";
import MenuLink from "./MenuLink";
import LogoBubble from "./logoBubble/LogoBubble";


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  const controlNavbar = () => {
    // console.log(window.scrollY)
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !isOpen) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  });
  /* previous header bg bg-[#13192a] */
  return (
    <>

      <header
        className={`bg-gray-900 header ${show} py-4  md:py-8 dark:bg-slate-700 dark:text-white z-40 bg-cover bg-center shadow-2xl`} /* style={{ backgroundImage: `url(${heroBg})` } } */
      >
        <nav className={`max-w-7xl px-4 mx-auto items-center`}>
          <div className="flex justify-between items-center font-normal text-black">
            <Link className="font-normal" smooth to="/">
              <LogoBubble/>
            </Link>
            {/* For large Devices */}
            {/* <ul className="md:flex md:space-x-6 lg:space-x-14 hidden uppercase text-white">
              <Link smooth to="#home">
                <li className="cursor-pointer hover:scale-105">home</li>
              </Link>
              <Link smooth to="#projects">
                <li className="cursor-pointer">Projects</li>
              </Link>
              <Link smooth to="#contact">
                <li className="cursor-pointer">Contact</li>
              </Link>
            </ul> */}
            {/* animated nav link */}
            <div className="hidden md:block">
              <MenuLink  />
            </div>
            {/* Menu btn for only mobile devices */}
            <div className="md:hidden text-white flex items-center justify-center space-x-2">
              <Hamburger toggled={isOpen} toggle={handleToggle} size={25} />
            </div>
          </div>
          {/* menu for mobile devices */}
          <div
            className={`${
              isOpen ? "flex" : "hidden"
            }  absolute right-0 flex-col top-[86px] w-full mx-auto text-center  bg-[#111827] text-xl -mt-2 text-white menu-animation`}
          >
            <ul className="flex list-none flex-col py-6">
              <Link smooth to="#home" onClick={closeMenu}>
                <li className="cursor-pointer pb-6">Home</li>
              </Link>
              <Link smooth to="#project" onClick={closeMenu}>
                <li className="cursor-pointer pb-6">Projects</li>
              </Link>
              <Link smooth to="#contact" onClick={closeMenu}>
                <li className="cursor-pointer pb-6">Contact</li>
              </Link>
            </ul>
          </div>
        </nav>
      </header>
      {/* </GradientWrapper> */}
    </>
  );
}

export default Navbar;
