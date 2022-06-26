import React from "react";

const HeroImage = ({ imgUrl, children, bgColor = "rgb(57 57 57 / 0.3)" }) => {
  return (
    <div
      style={{ backgroundImage: `url('/${imgUrl}')` }}
      className="  min-h-[500px] min-w-full flex justify-center items-center "
    >
      <div
        style={{ backgroundColor: `${bgColor}` }}
        className="  py-16 px-36 text-white"
      >
        {children}
      </div>
    </div>
  );
};

export default HeroImage;
