import Heading from "components/Heading";
import Section from "components/Section";
import Image from "next/image";
import ciImage from "/public/ci-bg.jpg";

const CommercialInsights = () => {
  return (
    <>
      <div className="relative overflow-hidden mb-40">
        <div className=" h-full absolute rounded-3xl overflow-hidden  -right-10 top-0 w-2/5  ">
          <Image
            src={ciImage}
            alt="ci background"
            layout="fill"
            placeholder="blur"
            width={610}
            height={386}
            objectFit="cover"
            objectPosition="50% 5%"
          />
        </div>
        <Section>
          <div className=" max-w-[50%] pb-20 ">
            {" "}
            <Heading>COMMERCIAL INSIGHTS</Heading>
            <p className="mt-20 ml-10 text-xl text-justify text-ci-gray-0  ">
              The traditional method for selecting and evaluating candidates for
              new positions within employment offices and placement agencies
              does not match the shape of the future of work.
            </p>
          </div>
        </Section>
      </div>
      <Section>
        <div className="my-16 ">
          <p className=" bg-ci-red-0/10 p-10 text-xl max-w-6xl mx-auto text-justify ">
            That’s why we developed a perspective of ‘Commercial Insights’ that
            looks beyond traditional competency definitions. Whether someone is
            competent or not has been largely a comparison of persons in the
            same field. Yet, other disciplines that have excess workers may use
            80% of the same competencies used in a category that’s starving for
            workers. The only way for us to serve both the unemployed and
            employers is to quantify the inner wisdom of someone’s ability to
            rise above him/herself in becoming competent, where it feels not yet
            comfortable. The responsibility lies with oneself.
          </p>
        </div>
      </Section>
      <div className=" relative py-20">
        <Section>
          {" "}
          <p className=" mb-6 max-w-6xl  text-lg  mx-auto">
            Our research-backed Commercial Insights approach solves this problem
            for government employment offices and staffing agencies. We have
            developed an Artificial Intelligence system that can assess the
            accurate competencies of individuals beyond employment history.
          </p>
          <p className=" mb-6 max-w-6xl text-lg  mx-auto">
            It is easy to compare one against the other in terms of competencies
            was in the current system. However, our population and work
            processes have grown beyond the current system of skills-sets and
            comparisons against each other and instead focuses on an
            individual’s competencies. Along with their desire and willingness
            to stretch their abilities. By looking beyond degree, position,
            title and considering all possible experience a worker has developed
            for themselves, we can uncover hidden strengths and strategies that
            allow for better, faster, and more targeted recruitment and
            placement.
          </p>
          <p className=" mb-6 max-w-6xl text-lg mx-auto">
            We offer more than a resume search. Our research findings and
            development of software technology based on it provide a
            transformative and groundbreaking new approach to long-sought
            solutions in the field of workforce training, utilization, and
            retainment; what we have developed promises to upend the entire
            Global system of employment itself. Prepare for the future of work
            with Commercial Insights.
          </p>
        </Section>
      </div>
    </>
  );
};

export default CommercialInsights;
