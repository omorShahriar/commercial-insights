import Heading from "components/Heading";
import Section from "components/Section";
import Image from "next/image";
import upBg from "/public/up-bg.jpg";

const UnemploymentProcess = () => {
  return (
    <>
      <Section>
        <Heading>RE-ENVISIONING ‘THE UNEMPLOYMENT PROCESS’</Heading>
      </Section>
      <div className="relative overflow-hidden  my-24">
        <div className=" h-full absolute rounded-3xl overflow-hidden  -right-10 top-0 w-2/5  ">
          <Image
            src={upBg}
            alt="unemployment process background"
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
            <p className="mt-20 ml-10 text-xl text-justify text-ci-gray-0  ">
              Our research has shown that businesses, government agencies,
              staffing offices, and even universities see a fundamentally
              fractured employment system across the board. Moreover,
              universities and governments design curriculum and make funding
              decisions around this same broken system leading to a world where
              competent workers remain pigeonholed by the previous work history,
              even though so many competencies are transferable in today&apos;s
              economy. At the same time, businesses remain unable to fill
              necessary positions.
            </p>
          </div>
        </Section>
      </div>
      <Section>
        <div className=" text-lg mb-40">
          <p className="mb-6">
            Job placement and processing methods in place today are designed for
            a world that hasn&apos;t existed for almost three decades. This
            system can only analyze what a resume includes, such as employment
            history, degrees of education, and service records. It&apos;s a
            system that can only look at John Smith, whose job was made
            redundant at Insurance Company A, and see if Insurance Company B, C,
            and D are hiring for that same position. If they aren&apos;t, John
            Smith sits at home and collects unemployment money.
          </p>
          <p>
            What if unemployment agencies, staffing offices, and job search
            sites could evaluate a candidate&apos;s comprehensive competencies
            beyond what arbitrary position is on their resume? What if there was
            a system capable of extrapolating the actual abilities that John
            Smith learned and developed at Insurance Company A? It would
            recognize those competencies to be transferable to not only
            Insurance Company B, but also at Finance Capital A, Construction
            Company A, and Production Company A?
          </p>
        </div>
        <div className=" bg-ci-aqua-0/10 p-20 text-lg mb-40 ">
          <p className="mb-6">
            Commercial Insights has developed proprietary data systems to do
            just that. Our research led us to conclude that what is needed and,
            what we provide, is a paradigm shift that deprioritizes the focus on
            the functions served by an employment candidate during his previous
            employment and focuses on the processes in which he took part.
          </p>
          <p className="mb-6">
            However, while a person&apos;s work history may list positions in
            Marketing, Accounting, and Sales, the companies they were a part of
            actually operated based on processes. Processes like Order to Cash,
            Supply Chain, and Procure To Pay. Through the carrying out of these
            processes by employees, the actual results of the business are
            created. Employees work as groups on projects or processes to
            accomplish results. Furthermore, training often occurs at the
            intersection of these processes and business functions. As a result,
            employees have to participate in many different processes throughout
            their careers, regardless of their position.
          </p>
          <p className="mb-6">
            Amazingly, we have found that the processes are highly similar
            across all industries and not bespoke. Industries share many common
            processes resulting in a high probability of a person&apos;s
            competency set being applicable to more than their current industry
            position. Building on generally agreed result areas and competencies
            means that candidates for employment do not need to be limited by
            their job titles or previous workplaces. Competencies and abilities
            can work together to empower a person to build a bridge to new
            abilities needed for a position outside their current industry.
            Competencies are transferable across companies and indeed industries
            based on their competencies within these processes.
          </p>
          <p className="mb-6">
            Like how Duolingo identifies language competencies and teaches a new
            language using the identified competencies as a jumping off point,
            our software identifies candidates&apos; core competencies based on
            their likely engagement processes at work regardless of their
            official position.
          </p>
        </div>
      </Section>
    </>
  );
};

export default UnemploymentProcess;
