import React from "react";

const Heading = ({ children, textColor = "blue" }) => {
  return (
    <div className="relative my-16">
      <h1
        style={{
          color: `${
            textColor == "blue"
              ? "rgb(21 162 218 / var(--tw-text-opacity))"
              : "rgb(241 97 97 / var(--tw-text-opacity))"
          }`,
        }}
        className="  text-center font-extrabold text-4xl max-w-prose mx-auto "
      >
        {children}
      </h1>
      <div
        style={{
          backgroundColor: `${
            textColor == "blue"
              ? "rgb(21 162 218 / 0.1)"
              : "rgb(241 97 97 / 0.1)"
          }`,
        }}
        className=" absolute top-[65%] w-full -z-20  h-full  "
      ></div>
    </div>
  );
};

export default Heading;
