import React from "react";

const HeroImage = ({ imgUrl, children }) => {
  return (
    <div
      style={{ backgroundImage: `url('/${imgUrl}')` }}
      className="  min-h-[500px] min-w-full flex justify-center items-center "
    >
      <div className=" bg-ci-gray-0/30 py-16 px-36 text-white">{children}</div>
    </div>
  );
};

export default HeroImage;
