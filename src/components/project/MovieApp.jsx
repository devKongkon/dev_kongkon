import { Link } from "react-router-dom";
import { movieImg, foodImg } from "../../index";


function MovieApp() {
  return (
    <>
      <div className="mx-auto duration-300 hover:shadow-sm shadow-md  rounded-2xl py-10">
        <div className="grid lg:grid lg:grid-cols-2 gap-y-10 justify-center items-center py-6">
          <div className="h-[200px] sm:h-[300px] md:h-[400px] overflow-hidden relative group duration-500 rounded-lg hover:scale-105 ">
            <img
              className="transition-transform transform group-hover:-translate-y-[60%] duration-[8000ms] cursor-pointer mx-auto w-[400px]"
              src={movieImg}
              alt=""
            />
          </div>
          <div className="text-center flex flex-col items-center lg:gap-4 py-4 ">
            <Link
              className="hover:shadow-sm px-6  place-content-center rounded-full shadow-lg duration-300 dark:text-gray-600 dark:bg-gray-100 py-1 border flex items-center justify-center mb-4"
              target="_blank"
              to="https://movieeworld.netlify.app/"
            >
              Live | Movie App
            </Link>
            <button className="hover:shadow-sm px-6  place-content-center rounded-full shadow-lg duration-300 dark:text-gray-600 dark:bg-gray-100 py-1 border flex items-center justify-center">
              React + Redux + SASS
            </button>

            <p className="pt-12 text-[#7e8393] sm:max-w-xl sm:mx-auto">
              I have implemented here searching, pagination, filtering, infinite scrolling, lazy loading,  single movie page design, and many more features.
            </p>

            <div className="px-4 pb-2  flex-col gap-6 items-center justify-center hidden lg:inline-block lg:gap-4">
              <div className="shadow-lg duration-300 hover:shadow-sm px-6  place-content-center rounded-full dark:text-gray-600 dark:bg-gray-100 py-1 ">
                <Link
                  target="_blank"
                  to="https://github.com/devKongkon/movie-world"
                  className=""
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="30"
                    height="30"
                    className="inline-block cursor-pointer font-bold "
                  >
                    <path
                      fill="#26269a"
                      fillRule="evenodd"
                      d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                    />
                  </svg>
                  Code
                </Link>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <Link
              className="hover:shadow-sm px-6  place-content-center rounded-full shadow-lg duration-300 dark:text-gray-600 dark:bg-gray-100 py-1 border flex items-center justify-center"
              target="_blank"
              to="https://github.com/devKongkon/movie-world"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                className="inline-block cursor-pointer font-bold mr-1"
              >
                <path
                  fill="#26269a"
                  fillRule="evenodd"
                  d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z"
                />
              </svg>
              Code
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default MovieApp;
