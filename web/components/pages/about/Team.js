import Section from "components/Section";
import Image from "next/image";
import ImageFrame from "components/ImageFrame";

import gearOrange from "/public/gear-orange.svg";
import gearBlue from "/public/gear-blue.svg";
import stefanie from "/public/stefanie.png";
import brad from "/public/brad.png";
import patrick from "/public/patrick.png";
import Heading from "components/Heading";

const BackgroundBar = ({ blue = false, left = false, right = false }) => {
  return (
    <div
      style={{
        backgroundColor: `${
          blue == true ? "rgb(21 162 218 / 0.1)" : "rgb(241 97 97 / 0.1)"
        };`,
        left: `${left == true ? 0 : "auto"}`,
        right: `${right == true ? 0 : "auto"}`,
      }}
      className=" absolute h-1/2 w-10  top-1/2  -translate-y-1/2"
    />
  );
};
const BackgroundDotBox = ({ blue = false, left = false, right = false }) => {
  return (
    <div
      style={{
        left: `${left == true ? "15%" : "auto"}`,
        right: `${right == true ? "15%" : "auto"}`,
      }}
      className=" absolute h-24 w-24  -bottom-[5%]  "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        fill="none"
        viewBox="0 0 110 110"
      >
        <g
          fill={blue == true ? "rgb(21 162 218 / 0.1)" : "rgb(241 97 97 / 0.1)"}
        >
          <g>
            <circle cx="8.039" cy="8.039" r="8.039"></circle>
            <circle cx="8.039" cy="36.175" r="8.039"></circle>
            <circle cx="8.039" cy="64.311" r="8.039"></circle>
            <circle cx="8.039" cy="91.945" r="8.039"></circle>
          </g>
          <g>
            <circle cx="36.678" cy="36.175" r="8.039"></circle>
            <circle cx="36.678" cy="63.306" r="8.039"></circle>
            <circle cx="36.678" cy="92.699" r="8.039"></circle>
            <circle cx="36.678" cy="9.044" r="8.039"></circle>
          </g>
          <g>
            <circle cx="65.316" cy="36.175" r="8.039"></circle>
            <circle cx="65.317" cy="63.306" r="8.039"></circle>
            <circle cx="65.316" cy="90.438" r="8.039"></circle>
            <circle cx="65.316" cy="9.044" r="8.039"></circle>
          </g>
          <g>
            <circle cx="93.955" cy="36.175" r="8.039"></circle>
            <circle cx="93.955" cy="63.307" r="8.039"></circle>
            <circle cx="93.955" cy="91.192" r="8.039"></circle>
            <circle cx="93.955" cy="9.044" r="8.039"></circle>
          </g>
        </g>
      </svg>
    </div>
  );
};

const Team = () => {
  return (
    <>
      <div className=" py-16">
        {" "}
        <Section>
          <div className="relative pb-10">
            {" "}
            <Heading>
              COMMERCIAL INSIGHTS{" "}
              <span className=" text-ci-blue-0 ">
                ENABLES A BROADER UNDERSTANDING OF JOB ENVIRONMENTS & EMPLOYMENT
                MARKETS
              </span>
            </Heading>
            <div className=" absolute -z-10 left-0 bottom-8 ">
              <Image alt="gear" src={gearOrange} />
            </div>
            <div className=" absolute -z-10 right-0 bottom-8 ">
              <Image alt="gear" src={gearBlue} />
            </div>
          </div>
        </Section>
        <Section>
          {" "}
          <p className=" max-w-6xl font-medium text-ci-gray-0 text-xl mt-4 text-center mx-auto">
            We approach the subject from two sides. Firstly, from the advisory
            angle, helping agencies expand opportunities through a common
            framework of competencies across industries, and secondly, from the
            job seeker&apos;s perspective.{" "}
          </p>
          <div className=" my-32 bg-ci-aqua-0/10">
            <p className=" py-8 px-4 text-center font-medium text-xl text-ci-gray-0">
              {" "}
              <strong>Stefania Dinklage</strong>, <strong>Brad Mueller</strong>,
              and <strong>Patrick O. Connelly</strong> together form Commercial
              Insights, a globally recognized team of experts that maximize the
              efficiency of workforces and return businesses to profitability.
              We help governments, companies, and employment agencies step into
              the future with what already lies under their feet. We&apos;ll
              open doors to the future of labor allocation, and that future is
              now.
            </p>
          </div>
        </Section>
        <div className="relative mb-40">
          <Section>
            <div className="   grid grid-cols-12 gap-x-8">
              {" "}
              <div className="col-span-6">
                {" "}
                <ImageFrame
                  name="Stefanie Dinklage"
                  img={stefanie}
                  box="orange"
                  outline="blue"
                />
              </div>
              <div className="col-span-6 px-8 text-ci-gray-0 flex flex-col gap-y-16 text-justify text-lg">
                <p>
                  Stefanie&apos;s diverse career extends over two decades, seven
                  languages, and success in both academic and business
                  environments. Early concentration in the hospitality industry
                  provided insight into leadership, management, and human
                  resources development. After obtaining an advanced degree in
                  Business and Behavioral Psychology, she began consulting in
                  the Shared Services industry, where she gained a deep
                  understanding of the complete business cycle.
                </p>
                <p>
                  Stefania achieved targeted knowledge of developing critical
                  human resources necessary to succeed in both public and
                  private enterprises throughout Europe. Her work became the
                  topic of several published articles promoting the rethinking
                  of the traditional methodologies to assess talent and
                  recruitment. In addition, her book [BOOK TITLE] guides a
                  common competency framework and more efficient use of human
                  resources.
                </p>
              </div>
            </div>
          </Section>

          <BackgroundBar right />
        </div>
        <div className=" relative mb-40">
          <Section>
            <div className="grid grid-cols-12 gap-x-8">
              {" "}
              <div className="col-span-6 px-8 text-ci-gray-0 flex flex-col gap-y-16 text-justify text-lg">
                <p>
                  Brad Mueller is a globally recognized leader in Business
                  Turnarounds, Startups, Mergers, Acquisitions, Divestment, and
                  Profitability. He has diverse and international experience in
                  executive level management and twenty years of proven P & L
                  results. Brad has helmed three start-ups in the USA and Korea
                  and has negotiated joint ventures, customer contracts, and
                  major supplier agreements. He is a true entrepreneur.
                </p>
              </div>
              <div className="col-span-6">
                {" "}
                <ImageFrame
                  name="Brad Mueller"
                  img={brad}
                  box="blue"
                  outline="orange"
                />
              </div>
            </div>
          </Section>
          <BackgroundDotBox left />
          <BackgroundBar blue left />
        </div>
        <div className="relative mb-40">
          <Section>
            <div className="  grid grid-cols-12 gap-x-8">
              {" "}
              <div className="col-span-6">
                {" "}
                <ImageFrame
                  name="Patrick O. Connelly"
                  img={patrick}
                  box="orange"
                  outline="blue"
                />
              </div>
              <div className="col-span-6 text-lg  px-8 text-ci-gray-0 flex flex-col gap-y-16 text-justify">
                <p>
                  Patrick O. Connelly has been in global trade and risk
                  management manufacturing for four decades, splitting his time
                  as an executive and university professor. His expertise
                  extends to developing successful business processes in
                  challenging markets such as the People&apos;s Republic of
                  China and Southeast Asia.
                </p>
              </div>
            </div>
          </Section>
          <BackgroundDotBox right blue />
          <BackgroundBar right />
        </div>
      </div>
    </>
  );
};

export default Team;
