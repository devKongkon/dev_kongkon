import { useInView } from "framer-motion";
import { cloneElement, useRef } from "react";

const LayoutEffect = ({
  children,
  className,
  isInviewState: { trueState = "", falseState = "" },
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return cloneElement(children, {
    ref,
    className: `${children.props.className || ""} ${className || ""} ${
      isInView ? trueState : falseState
    }`,
  });
};

export default LayoutEffect;

// You have to use this class where you want to use this
/* className="duration-1000 delay-300"
isInviewState={{
    trueState: "opacity-1",
    falseState: "opacity-0"
}} */
