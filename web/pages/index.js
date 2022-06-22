import HeroImage from "components/HeroImage";
import ImageFrame from "components/ImageFrame";
import Section from "components/Section";
import Head from "next/head";
const businessStreamsData = [
  {
    img: "/ci-bg.jpg",
    blurHash: "L8G]K=kP009E00jD_MSN00nPwGM{",
    box: "orange",
    outline: "blue",
    title: "Business Turnaround (Consulting)",
    description:
      "Business Turnaround: It isn’t necessary to throw it all out and start over.We analyze a situation quickly and design, detail and execute a turnaround strategy that retains the essential elements of the existing enterprise.",
  },

  {
    img: "/ci-bg.jpg",
    blurHash: "L8G]K=kP009E00jD_MSN00nPwGM{",
    box: "blue",
    outline: "orange",
    title: "Credit Risk Consulting ",
    description:
      "Design and execute an effective Business Risk strategy and structure.We develop Credit Risk Management systems and structure shared service centers.",
  },

  {
    img: "/ci-bg.jpg",
    blurHash: "L8G]K=kP009E00jD_MSN00nPwGM{",
    box: "orange",
    outline: "blue",
    title: "Competency Development",
    description:
      "We develop a Common Framework of Competencies based on Business Processes leading to a Generally Agreed Library of Competencies Case Study: Governmental Consulting (Organization Redesign and Improvement). Restructure the way unemployment agencies are working. ",
  },
];

const BusinessStreams = () => {
  return (
    <div className="grid grid-cols-12 gap-12 ">
      {businessStreamsData.map((bs, i) => {
        return (
          <div key={i} className=" col-span-4">
            <div className="flex flex-col gap-y-16 h-full">
              <div className=" w-1/2 mx-auto ">
                <ImageFrame img={bs.img} box={bs.box} outline={bs.outline} />
              </div>
              <div className="  py-10 px-6 bg-ci-red-0/10 h-full mb-16 ">
                <h2 className="text-ci-red-0 font-bold text-center text-lg mb-6">
                  {bs.title}
                </h2>
                <p className=" text-ci-gray-0 text-justify ">
                  {bs.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Commercial Insights</title>
      </Head>
      <HeroImage imgUrl="main-hero.jpg">
        <h1 className=" font-extrabold uppercase text-3xl text-center mb-6 tracking-wider ">
          COMMERCIAL INSIGHTS
        </h1>
        <p className=" font-medium text-center tracking-wide ">
          We address fast-changing business environments
        </p>
      </HeroImage>

      <div className=" mt-16">
        <p className="mb-6 text-ci-gray-0 text text-center">
          Evaluate Capabilities Outside of Work History{" "}
        </p>
        <h2 className=" font-bold text-2xl text-ci-red-0 uppercase tracking-wider text-center mb-16 ">
          BUSINESS STREAMS
        </h2>
        <div>
          <Section>
            <BusinessStreams />
          </Section>
        </div>
      </div>
    </>
  );
}
