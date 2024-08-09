import { useMotionValue, motion, useSpring, useTransform } from "framer-motion";
import React, { useRef } from "react";
import { FiArrowRight } from "react-icons/fi";
import RoundedButton from "../components/roundedButton/RoundedButton";
import {foodImg, movieImg} from '../index'

const Projects = () => {
  return (
    <section className="bg-gray-900 p-4 md:p-8">
      <div className="mx-auto max-w-7xl flex flex-col gap-10">
        <Link
          heading="MovieApp"
          subheading="I have implemented here searching,  pagination, sorting, infinite scrolling, lazy loading, single movie page design and many more(React + Redux + SASS)"
          imgSrc = {`${movieImg}`}
          href="https://movieeworld.netlify.app/"
          href2="https://github.com/devKongkon/movie-world"
          button="Code"
        />
        <Link
          heading="Food App"
          subheading="I have implemented here searching, sorting, pagination, single product page design, related product section, add to cart method and many more(React + Redux + Tailwind CSS)."
          imgSrc={`${foodImg}`}
          href="https://pizza-burger-shop.netlify.app/"
          href2="https://github.com/devKongkon/food-ordering-app"
          button="Code"
        />
      </div>
    </section>
  );
};

export default Projects;

const Link = ({ heading, imgSrc, subheading, href, button, href2 }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const top = useTransform(mouseYSpring, [0.5, -0.5], ["40%", "60%"]);
  const left = useTransform(mouseXSpring, [0.5, -0.5], ["60%", "70%"]);

  const handleMouseMove = (e) => {
    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.main
      href={href}
      ref={ref}
      onMouseMove={handleMouseMove}
      initial="initial"
      whileHover="whileHover"
      className="group relative flex items-center justify-between  border-neutral-700 py-4 transition-colors duration-500 hover:border-neutral-50 md:py-8 bg-gray-900"
    >
      <div>
        <motion.span
          variants={{
            initial: { x: 0 },
            whileHover: { x: -16 },
          }}
          transition={{
            type: "spring",
            staggerChildren: 0.075,
            delayChildren: 0.25,
          }}
          className="relative z-10 block text-4xl font-bold transition-colors duration-500 md:text-6xl text-white"
        >
          {heading.split("").map((l, i) => (
            <motion.span
              variants={{
                initial: { x: 0 },
                whileHover: { x: 16 },
              }}
              transition={{ type: "spring" }}
              className="inline-block bg-clip-text bg-gradient-to-br text-transparent"
              key={i}
              style={{
                backgroundImage:
                  "linear-gradient(179.1deg, #FFFFFF 0.7%, rgba(255, 255, 255, 0) 182.09%)",
              }}
            >
              {l}
            </motion.span>
          ))}
        </motion.span>
        <span
          className="relative z-10 my-6 block text-base  transition-colors duration-500 bg-clip-text max-w-sm bg-gradient-to-r text-transparent"
          style={{
            backgroundImage:
              "linear-gradient(179.1deg, #FFFFFF 0.7%, rgba(255, 255, 255, 0) 182.09%)",
          }}
        >
          {subheading}
        </span>
        <div className="flex items-center">
          <a href={href2} target="_blank">
            <RoundedButton>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                style={{ marginRight: "10px" }}
              >
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                />
              </svg>
              {button}
            </RoundedButton>
          </a>
        </div>
      </div>
      <a href={href} target="_blank">
        <motion.img
          style={{
            top,
            left,
            translateX: "-50%",
            translateY: "-50%",
          }}
          variants={{
            initial: { scale: 0, rotate: "-12.5deg" },
            whileHover: { scale: 1, rotate: "8.5deg" },
          }}
          transition={{ type: "spring" }}
          src={imgSrc}
          className="absolute z-0 h-24 w-32 rounded object-cover md:h-72 md:w-72"
          alt={`Image representing a link for ${heading}`}
        />
      </a>
      <motion.div
        variants={{
          initial: {
            x: "25%",
            opacity: 0,
          },
          whileHover: {
            x: "0%",
            opacity: 1,
          },
        }}
        transition={{ type: "spring", duration: 2 }}
        className="relative z-10 p-4"
      >
        <motion.a title="visit site" href={href} target="_blank">
          <FiArrowRight className="text-5xl text-neutral-50 cursor-pointer" />
        </motion.a>
      </motion.div>
    </motion.main>
  );
};
