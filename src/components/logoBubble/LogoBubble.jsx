import React from "react";
import '../../components/logoBubble/bubble.modules.css'

const Example = () => {
  return (
    <div className="place-content-center">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {

  return (
    <h2 className=" text-xl md:text-4xl text-white font-bold ">
      {"dev_kongkon".split("").map((child, idx) => (
        <span className="hoverText" key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default Example;
