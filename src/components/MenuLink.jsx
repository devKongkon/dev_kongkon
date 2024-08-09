import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { HashLink as Link } from "react-router-hash-link";

const MenuLink = () => {
  return (
    <div className="bg-gray-900">
      <SlideTabs />
    </div>
  );
};
export default MenuLink;

const SlideTabs = () => {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((pv) => ({
          ...pv,
          opacity: 0,
        }));
      }}
      className="relative mx-auto justify-center items-center  flex w-full rounded-full  bg-white"
    >
      <Link smooth to="#home">
        <Tab setPosition={setPosition}>Home</Tab>
      </Link>
      <Link smooth to="#projects">
        <Tab setPosition={setPosition}>projects</Tab>
      </Link>
      <Link smooth to="#contact">
        <Tab setPosition={setPosition}>contact</Tab>
      </Link>

      <Cursor position={position} />
    </ul>
  );
};

const Tab = ({ children, setPosition }) => {
  const ref = useRef(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;

        const { width } = ref.current.getBoundingClientRect();

        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-3 md:text-base"
    >
      {children}
    </li>
  );
};

const Cursor = ({ position }) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      className="absolute z-0 h-7 rounded-full bg-black md:h-12"
    />
  );
};
