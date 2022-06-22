import { Disclosure, Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/solid";
import { nanoid } from "nanoid";
import { LoremIpsum } from "lorem-ipsum";
import HeroImage from "components/HeroImage";
import Head from "next/head";

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4,
  },
  wordsPerSentence: {
    max: 16,
    min: 4,
  },
});

const FAQs = [
  {
    id: nanoid(),
    question: "How do your innovations impact the interview process? ",
    answer:
      " The orientation survey transforms from a series of questions that narrow opportunities to ones that expand opportunities. Questions are formed to build a database of competencies, rather than a database of previous employment. The survey will indicate the diversity and need of employee’s competency areas and levels as well as potential gaps that can be closed through job training. ",
  },
  {
    id: nanoid(),
    question: "What is the impact on the unemployment agency's mission? ",
    answer:
      "Agencies will emphasize identifying competencies per activity rather than job. This change is transformative. All employment agencies possess a database of competencies. However, many of these competencies sit in a hierarchy underneath a particular employment category. Agencies gain clearly defined and readily accessible data points about a job seeker that satisfies specific jobs or positions. ",
  },
  {
    id: nanoid(),
    question:
      "Does your system assist workers in gaining more robust and valid competencies?",
    answer:
      " Crucial issues for job seekers are the lack of training opportunities, vacancies, lack of motivation, and self-confidence. The problem is that efficiencies like automation put many workers out of work within a single industry at the same time. On the other hand, workers in need of increased competencies still have many crossover competencies that can be augmented and applied across categories, increasing opportunities, and lifting motivation.",
  },
  {
    id: nanoid(),
    question: "How will agencies change the monitoring of beneficiaries?",
    answer:
      " Currently, monitoring focuses on beneficiaries adhering to a set of rules, usually a work search and reporting requirement, at minimum. It is based on the obligations imposed on the beneficiary that the employment agencies deliver benefits. Agents will have opportunities to take a more proactive approach based on an understanding of the trauma of job loss and the ability to offer hope to a person who my feel their job prospects are severely limited, leading to monitoring based on building opportunities, instead of exacerbating the beneficiary’s trauma through continual job searches in over-saturated areas.",
  },
  {
    id: nanoid(),
    question:
      "What competency-related content ends up residing in a beneficiary’s profile? ",
    answer:
      "First, we define and target the common business processes used by a beneficiary. Then, we outline the result areas of those processes and create an inventory to be used as the basis of a strategy for reintegration between the agent and the beneficiary. ",
  },
  {
    id: nanoid(),
    question: "How do roles change for the agent and the unemployed person?",
    answer:
      " Traditionally, the perspective is that there are jobs and there are employees. Consequently, employee competencies are only measured with reference to the positions they hold. Agency consultants support to provide direction. Secondly the unemployed job seeker should recognize the need to refine competencies to improve attractiveness to potential hiring sources.",
  },
];

export default function Screen() {
  return (
    <>
      <Head>
        <title>FAQs</title>
      </Head>

      <HeroImage imgUrl="faq-hero.jpg">
        <h1 className=" font-extrabold uppercase text-3xl text-center my-2 tracking-wider ">
          FAQs
        </h1>
      </HeroImage>
      <div className="w-full px-4 py-16 ">
        <div className="mx-auto w-full max-w-2xl rounded-2xl bg-ci-red-0/10 py-2 px-4 flex flex-col gap-y-2">
          {FAQs.map((faq) => {
            return (
              <Disclosure key={faq.id}>
                {({ open }) => (
                  <>
                    <Disclosure.Button className="flex w-full justify-between rounded-lg   p-2 text-left  font-bold text-ci-red-1 hover:text-ci-red-0 focus:outline-none duration-300 transition-all">
                      <span className="max-w-xl text-xl">{faq.question}</span>
                      <ChevronUpIcon
                        className={`${
                          open ? "rotate-180 transform" : ""
                        } h-5 w-5 `}
                      />
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="p-4 rounded-xl bg-white text-lg  text-ci-gray-0">
                        {faq.answer}
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            );
          })}
        </div>
      </div>
    </>
  );
}
