
import {

  FoodApp,
  MovieApp,
  Projects,
  Skills,
} from "../index";
import FlipHeading from "../components/FlipHeading";
import RoundedButton from "../components/roundedButton/RoundedButton";
import { Link } from "react-router-dom";


/* bg-[#101629] previous bg
 */
function Home() {
  return (
    <>
      <section className="bg-gray-900" id="home">
        <div
          className="absolute  inset-0 blur-[118px] max-w-lg  l sm:max-w-3xl sm:h-[400px]"
          style={{
            background:
              "linear-gradient(1deg, rgba(192, 132, 252, 0) 15.73%, rgba(14, 165, 233, 0.41) 15.74%, rgba(232, 121, 249, 0) 56.49%, rgba(79, 70, 229, 0) 115.91%)",
          }}
        ></div>
        <section
          className="bg-cover bg-no-repeat bg-center"
          // style={{ backgroundImage: `url(${heroBg})` }}
        >
          {/* Hero section */}
          {/* <CursorHoverMask/> */}
          <div className={` container mx-auto px-4 relative pt-40`}>
            <div className="md:grid grid-cols-2 items-center justify-center lg:justify-between py-6">
              <div className="hero__image"></div>
              <div className="text-center pt-12 md:pt-0">
                <h1
                  className="text-4xl bg-clip-text text-transparent bg-gradient-to-r font-extrabold mx-auto sm:text-6xl pb-4"
                  style={{
                    backgroundImage:
                      "linear-gradient(179.1deg, #FFFFFF 0.7%, rgba(255, 255, 255, 0) 182.09%)",
                  }}
                >
                  Frontend <br />{" "}
                  <span className="leading-tight">Developer.</span>
                </h1>

                <p className="max-w-xl mx-auto text-gray-400 text-base">
                  Hi, I'm Kongkon, a passionate Frontend Web Developer based in
                  Dhaka, Bangladesh. I have proficiency in HTML, CSS,
                  JavaScript, TypeScript ReactJs, NextJs Redux, Tailwind,
                  SASS, Framer Motion, and Figma.
                </p>
              </div>
            </div>
          </div>
          {/* Desktop and mobile skill icon section */}
          <section>
            <Skills />
          </section>
          {/* Github, linked, CV download button  */}
          <div className="text-center flex justify-center items-center md:gap-x-4 py-20 md:py-10 flex-wrap gap-x-4 gap-y-4">
            <a href="/cv_dev_kongkon.pdf" download>
              <RoundedButton>Download CV</RoundedButton>
            </a>
            <Link to="https://www.linkedin.com/in/devkongkon/" target="_blank">
              <RoundedButton>
                <svg
                  className="w-6 h-6 hover:text-gray-200 duration-150"
                  fill="none"
                  viewBox="0 0 48 48"
                >
                  <g clipPath="url(#clip0_17_68)">
                    <path
                      fill="currentColor"
                      d="M44.447 0H3.544C1.584 0 0 1.547 0 3.46V44.53C0 46.444 1.584 48 3.544 48h40.903C46.407 48 48 46.444 48 44.54V3.46C48 1.546 46.406 0 44.447 0zM14.24 40.903H7.116V17.991h7.125v22.912zM10.678 14.87a4.127 4.127 0 01-4.134-4.125 4.127 4.127 0 014.134-4.125 4.125 4.125 0 010 8.25zm30.225 26.034h-7.115V29.766c0-2.653-.047-6.075-3.704-6.075-3.703 0-4.265 2.896-4.265 5.887v11.325h-7.107V17.991h6.826v3.13h.093c.947-1.8 3.272-3.702 6.731-3.702 7.21 0 8.541 4.744 8.541 10.912v12.572z"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_68">
                      <path fill="currentColor" d="M0 0h48v48H0z" />
                    </clipPath>
                  </defs>
                </svg>
              </RoundedButton>
            </Link>

            <Link to="https://github.com/devKongkon" target="_black">
              <RoundedButton>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                  <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                  />
                </svg>
              </RoundedButton>
            </Link>
          </div>
        </section>
      </section>

      {/* Desktop projects view section */}
      <section id="projects" className="bg-gray-900 hidden md:block mx-auto">
        <h2 className="container mx-auto text-center py-10">
          <FlipHeading />
        </h2>
        <Projects />
      </section>

      {/* Mobile projects view section */}
      <section
        id="project"
        className="container pt-10 px-4 mx-auto flex flex-col items-center justify-center gap-y-10 md:hidden"
      >
        <MovieApp />
        <FoodApp />
      </section>
    </>
  );
}

export default Home;
