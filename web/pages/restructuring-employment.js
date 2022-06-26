import Heading from "components/Heading";
import HeroImage from "components/HeroImage";
import Section from "components/Section";
import Head from "next/head";
import Image from "next/image";
import EmbeddedVideo from "components/EmbeddedVideo";

const Screen = () => {
  return (
    <>
      <Head>
        <title>Restructuring Employment</title>
      </Head>
      <HeroImage imgUrl="resturcutre-hero.jpg">
        <h1 className=" font-extrabold uppercase text-3xl text-center my-2 tracking-wider ">
          Restructuring Employment Agencies
        </h1>
      </HeroImage>
      <Section>
        <p className=" mt-24 mb-12 text-ci-gray-0 ">
          An employment agency is never more challenged than in a time of
          significant change. Economies are experiencing extreme challenges
          brought about by the COVID pandemic, which has impacted every aspect
          of everyday life. So, might the role of an employment agency require a
          rethinking in light of its vital position in society and function in
          the community?
        </p>
        <div className="grid grid-cols-12 gap-y-12 gap-x-20 py-16 ">
          <div className=" col-span-7 ">
            <EmbeddedVideo videoId="TbPoqyNqmos" />
          </div>
          <div className=" col-span-5 p-8 text-ci-gray-0 text-justify bg-ci-red-0/10">
            <p>
              Unemployment agencies currently categorize beneficiaries via their
              work history, directing work searches within their current
              industry category and experiene. Wouldn&apos;t it be better to
              REORIENT THE CURRENT APPROACH TO APPLY CORE competencies AND
              OUTLYING ABILITIES ACROSS INDUSTRY BOUNDARIES TO DISCOVER
              EXPONENTIAL OPPORTUNITIES?
            </p>
          </div>
        </div>
        <p className="text-ci-gray-0">
          Systems that assist job seekers need to deploy tools to determine what
          are the best opportunities. Many agencies would better serve clients
          by evaluating what competencies or knowledge an individual brings to
          them and how agencies can use those competencies to place someone
          outside the job seeker&rsquo;s employment history. Agencies could
          integrate more individuals into gainful employment faster in a system
          that can &lsquo;think&rsquo; outside traditional employment
          categories. Commercial Insights enables a broader understanding of job
          environments and employment markets. We approach the subject from two
          sides. Firstly, from the advisory angle, helping agencies expand
          opportunities through a common framework of competencies across
          industries, and secondly, from the job seeker&rsquo;s perspective.
        </p>
        <Heading>RE-ENVISIONING ‘THE UNEMPLOYMENT PROCESS’</Heading>
        <div className="grid grid-cols-12 gap-12 items-center mb-16">
          <div className=" col-span-6 text-justify text-ci-gray-0">
            <p>
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
            <p>
              Job placement and processing methods in place today are designed
              for a world that hasn&apos;t existed for almost three decades.
              This system can only analyze what a resume includes, such as
              employment history, degrees of education, and service records.
              It&apos;s a system that can only look at John Smith, whose job was
              made redundant at Insurance Company A, and see if Insurance
              Company B, C, and D are hiring for that same position. If they
              aren&apos;t, John Smith sits at home and collects unemployment
              money.
            </p>
          </div>
          <div className=" col-span-6">
            <Image
              alt="re-envisioning"
              src="/re-envisioning.png"
              width={1182}
              height={1018}
              blurDataURL="KlOW?2W-_2S0kCR*~Wn+Ip"
              placeholder="blur"
            />
          </div>
        </div>
        <div className=" bg-ci-aqua-0/10 p-8 mb-16 ">
          <p className=" mb-6 ">
            What if unemployment agencies, staffing offices, and job search
            sites could evaluate a candidate&apos;s comprehensive competencies
            beyond what arbitrary position is on their resume? What if there was
            a system capable of extrapolating the actual abilities that John
            Smith learned and developed at Insurance Company A? It would
            recognize those competencies to be transferable to not only
            Insurance Company B, but also at Finance Capital A, Construction
            Company A, and Production Company A?
          </p>
          <p className=" font-bold ">
            Commercial Insights has developed proprietary data systems to do
            just that.
          </p>
        </div>
        <div>
          <p className="mb-6">
            Our research led us to conclude that what is needed and, what we
            provide, is a paradigm shift that deprioritizes the focus on the
            functions served by an employment candidate during his previous
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
            processes resulting in a high probability of a person’s competency
            set being applicable to more than their current industry position.
            Building on generally agreed result areas and competencies means
            that candidates for employment do not need to be limited by their
            job titles or previous workplaces. Competencies and abilities can
            work together to empower a person to build a bridge to new abilities
            needed for a position outside their current industry. Competencies
            are transferable across companies and indeed industries based on
            their competencies within these processes.
          </p>
          <p>
            Like how Duolingo identifies language competencies and teaches a new
            language using the identified competencies as a jumping off point,
            our software identifies candidates&apos; core competencies based on
            their likely engagement processes at work regardless of their
            official position.
          </p>
        </div>
        <Heading textColor="orange">
          REDEFINING ‘EMPLOYMENT AGENCY ROLES’
        </Heading>
        <div className=" grid grid-cols-12 gap-x-24 pt-24">
          <div className="col-span-5">
            <div className="relative">
              <div className="absolute -z-10 border-4 border-ci-red-0/40 h-4/5 w-2/5 -top-[6%] -left-[10%] "></div>{" "}
              <Image
                alt="redefining-employment"
                src="/redefining-employment.jpg"
                width={870}
                height={1306}
                placeholder="blur"
                blurDataURL="L7Fht$%#^%%M4TE2}?9b00E2^ONH"
                objectFit="cover"
                objectPosition="center"
              />
            </div>
          </div>
          <div className="col-span-7">
            <p className="text-justify text-xl px-20">
              What challenges confront today&apos;s government unemployment
              agencies? Likewise, what challenges have faced and regrettably
              continue to meet the unemployed? Unfortunately, the reality is
              that overqualified and willing workers remain distanced from
              meaningful employment, an increasing burden to both employers and
              potential employees. Therefore, we suggest a new approach to
              identify, introduce, and optimize available and/or desirable
              competencies.
            </p>
          </div>
        </div>
        <div className="my-16 ">
          <p>
            The unemployed professional trajectories and training paths are no
            longer linear, placing high demands on Public Employment Agencies
            the way they currently do business.
          </p>
          <p>
            All employment agencies process a database of competencies that the
            unemployed represent both a problem and an asset. Agencies
            categorize the competencies based on a person&apos;s resume and a
            personal assessment by an agency consultant, who is not likely an
            expert in any particular field.{" "}
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-3xl my-20">
            {" "}
            We organize the existing database step by step based on existing
            business processes. We do this by:
          </h2>
          <p className="relative bg-ci-red-0/10 text-center py-8 px-20 mb-20">
            {" "}
            <span className="z-10 absolute p-4 h-16 w-16 text-lg font-semibold bg-ci-red-0/50 -top-[2rem] -left-[2rem] ">
              1
            </span>
            Defining and targeting the fundamental processes that have been used
            by 80% of unemployed people.
          </p>
          <p className="relative bg-ci-red-0/10 text-center py-8 px-20 mb-20">
            {" "}
            <span className="z-10 absolute p-4 h-16 w-16 text-lg font-semibold bg-ci-red-0/50 -top-[2rem] -left-[2rem] ">
              2
            </span>
            Outlining those result areas and creating an inventory based on
            which an effective strategy for rapid and sustainable integration is
            jointly agreed.
          </p>
          <p className="relative bg-ci-red-0/10 text-center py-8 px-20 mb-20">
            {" "}
            <span className="z-10 absolute p-4 h-16 w-16 text-lg font-semibold bg-ci-red-0/50 -top-[2rem] -left-[2rem] ">
              3
            </span>
            Generating and evaluating with a 15-minute survey where the
            unemployed are asked whether they have direct experience in the
            result areas of the defined processes. A competency is defined as
            the desire and the willingness to use a competency with a constant
            effect.
          </p>
        </div>
        <div>
          <h2 className=" font-bold text-3xl my-20">
            {" "}
            Employment agencies are called upon to assist the unemployed through
            three different and sometimes competing activities:
          </h2>
          <div className="grid grid-cols-12 gap-20 mb-20">
            <div className=" col-span-4  px-6">
              <h3 className=" text-ci-red-0  text-lg font-semibold text-center mb-6 ">
                Monitoring
              </h3>
              <p className="text-justify">
                Individuals collecting unemployed compensation are required to
                meet certain obligations such as job searches. Agencies verify
                that beneficiaries comply.
              </p>
            </div>
            <div className=" col-span-4 px-6">
              <h3 className=" text-ci-red-0 text-lg  font-semibold text-center mb-6 ">
                Counseling
              </h3>
              <p className="text-justify">
                Newly unemployed people have undergone a life-changing trauma
                and need competent advice on the physical and psychological
                process. Agencies provide a level of empathy and guidance.
              </p>
            </div>
            <div className=" col-span-4 px-6">
              <h3 className=" text-ci-red-0 text-lg  font-semibold text-center mb-6 ">
                Advocacy
              </h3>
              <p className="text-justify">
                Job seekers, already stressed from job loss, experience added
                anxieties from the job-search process. Agencies provide a buffer
                by connecting unemployed people with organizations that need
                their competencies.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Screen;
