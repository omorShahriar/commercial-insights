import React from "react";
import Section from "components/Section";

const Hero = () => {
  return (
    <Section>
      <div className=" text-center py-16   bg-ci-red-0/10 ">
        <h1 className=" text-ci-red-0 font-extrabold text-3xl mb-6 ">
          ABOUT COMMERCIAL INSIGHTS
        </h1>
        <p className=" text-ci-gray-0 text-xl ">
          Learn more about Commercial Insights LLC{" "}
        </p>
      </div>
    </Section>
  );
};

export default Hero;
