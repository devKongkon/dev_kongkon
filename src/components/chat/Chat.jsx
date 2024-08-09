import { motion } from "framer-motion";
import { useRef, useState } from "react";
import { CiLocationOn, CiMail } from "react-icons/ci";

import emailjs from "@emailjs/browser";
import RoundedButton from "../roundedButton/RoundedButton";
import Magnetic from "../Magnetic";
import Swal from "sweetalert2";
import GradientWrapper from "../../GradientWrapper";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Chat() {
  const ref = useRef();
  const formRef = useRef();
  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_qqxu0y7",
        "template_0sl8pvc",
        formRef.current,
        "YAHfE92hjNWXqA-BC"
      )
      .then(
        () => {
          setSuccess(true);
          formRef.current.reset();
          setTimeout(() => setSuccess(false), 5000);
          // Swal.fire({
          //   position: "top-end",
          //   icon: "success",
          //   title: "Your work has been saved",
          //   showConfirmButton: false,
          //   timer: 1500
          // });
        },
        () => {
          setError(true);
          setTimeout(() => setError(false), 5000);
        }
      );
  };

  // const isInView = useInView(ref, { margin: "-100px" });
  //bg-[#1c1d20]"--previous bg of chat section
  return (
    <>
      <section
        className=" bg-gray-900"
        
        style={{
          background:
            "linear-gradient(0deg, rgba(192, 132, 252, 0) 15.73%, rgba(14, 165, 233, 0.41) 10%, rgba(232, 121, 249, 0) 10%, rgba(79, 70, 229, 0) 100%)",
        }}
      >
        <div className="max-w-7xl px-4 mx-auto py-2 relative pt-10" >
          <div
            ref={ref}
            className="grid grid-cols-1 md:grid-cols-2 items-center gap-x-20 pb-10"
          >
            <div className="max-w-sm">
              <h2 className="text-6xl md:space-y-4 dark:text-gray-200 text-white  leading-normal ">
                Let's work together.
              </h2>
            </div>
            <div className="">
              <form onSubmit={sendEmail} ref={formRef} >
                <div>
                  <input
                    placeholder="Enter your email"
                    name="email"
                    type="email"
                    required
                    className="w-full mt-2 px-3 py-2  bg-transparent outline-none text-white "
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Message me. I will response immediately"
                    name="message"
                    required
                    className="w-full mt-2 h-20 px-3 py-2 resize-none appearance-none bg-transparent outline-none  text-white"
                  ></textarea>
                </div>
                <button>
                  <RoundedButton>Submit</RoundedButton>
                </button>
              </form>
              <div className="py-4">
                {error && "Error"}

                {success && (
                  <RoundedButton>Message sent successfully.</RoundedButton>
                )}
              </div>
            </div>
          </div>
          {/* Last mini footer */}
          <div className=" flex border-t border-gray-800 items-center justify-between py-2 ">
            <p className="text-gray-400 text-center">
              © 2023 All rights reserved.
            </p>
            <div className="flex items-center justify-center text-gray-500  sm:mt-0">
              <Link
                to="https://www.linkedin.com/in/devkongkon/"
                target="_blank"
                aria-label="social media"
              >
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
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Chat;

//&apos

{
  /* <a href="/" target="_blank" aria-label="social media">
      <svg
        className="w-6 h-6 hover:text-gray-200 duration-150"
        fill="none"
        viewBox="0 0 48 48"
      >
        <g clipPath="url(#a)">
          <path
            fill="currentColor"
            d="M48 24C48 10.745 37.255 0 24 0S0 10.745 0 24c0 11.979 8.776 21.908 20.25 23.708v-16.77h-6.094V24h6.094v-5.288c0-6.014 3.583-9.337 9.065-9.337 2.625 0 5.372.469 5.372.469v5.906h-3.026c-2.981 0-3.911 1.85-3.911 3.75V24h6.656l-1.064 6.938H27.75v16.77C39.224 45.908 48 35.978 48 24z"
          />
        </g>
        <defs>
          <clipPath id="a">
            <path fill="currentColor" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </a> */
}
{
  /* <a href="/" target="_blank" aria-label="social media">
      <svg
        className="w-6 h-6 hover:text-gray-200 duration-150"
        fill="none"
        viewBox="0 0 48 48"
      >
        <g clipPath="url(#clip0_17_80)">
          <path
            fill="currentColor"
            d="M15.1 43.5c18.11 0 28.017-15.006 28.017-28.016 0-.422-.01-.853-.029-1.275A19.998 19.998 0 0048 9.11c-1.795.798-3.7 1.32-5.652 1.546a9.9 9.9 0 004.33-5.445 19.794 19.794 0 01-6.251 2.39 9.86 9.86 0 00-16.788 8.979A27.97 27.97 0 013.346 6.299 9.859 9.859 0 006.393 19.44a9.86 9.86 0 01-4.462-1.228v.122a9.844 9.844 0 007.901 9.656 9.788 9.788 0 01-4.442.169 9.867 9.867 0 009.195 6.843A19.75 19.75 0 010 39.078 27.937 27.937 0 0015.1 43.5z"
          />
        </g>
        <defs>
          <clipPath id="clip0_17_80">
            <path fill="currentColor" d="M0 0h48v48H0z" />
          </clipPath>
        </defs>
      </svg>
    </a> */
}
