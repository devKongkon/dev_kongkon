import React from "react";
import { Link } from "react-router-dom";


const Button = () => {
  return (
    <div className=" bg-slate-900 p-4">
      <Link download= "../../src/assets/images/dev_kongkon.webp">
        <DrawOutlineButton>Download cv</DrawOutlineButton>
      </Link>
    </div>
  );
};

const DrawOutlineButton = ({ children, ...rest }) => {
  return (
    <button
      {...rest}
      className="group bg-zinc-700 relative px-4 py-2 font-medium text-slate-100 transition-colors duration-[400ms] hover:text-white"
    >
      <span>{children}</span>

      {/* TOP */}
      <span className="absolute left-0 top-0 h-[1px] w-0 bg-zinc-200 transition-all duration-100 group-hover:w-full" />

      {/* RIGHT */}
      <span className="absolute right-0 top-0 h-0 w-[1px] bg-zinc-200 transition-all delay-100 duration-100 group-hover:h-full" />

      {/* BOTTOM */}
      <span className="absolute bottom-0 right-0 h-[1px] w-0 bg-zinc-200 transition-all delay-200 duration-100 group-hover:w-full" />

      {/* LEFT */}
      <span className="absolute bottom-0 left-0 h-0 w-[1px] bg-zinc-200 transition-all delay-400 duration-100 group-hover:h-full" />
    </button>
  );
};

export default Button;
