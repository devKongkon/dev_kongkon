const GradientWrapper = ({ children, ...props }) => (
  <div {...props} className={`relative ${props.className || ""}`}>
    <div
      className={`absolute m-auto blur-[160px] ${props.wrapperclassname || ""}`}
      style={{
        background:
          "linear-gradient(180deg, #7C3AED 0%, rgba(152, 103, 240, 0.984375) 0.01%, rgba(237, 78, 80, 0.2) 100%)",
      }}
    ></div>
    <div className="relative">{children}</div>
  </div>
);

export default GradientWrapper;
//You have to use this class where you want to use this

/* wrapperclassname="max-w-3xl h-[250px] top-12 inset-0 sm:h-[300px] lg:h-[650px]" */
