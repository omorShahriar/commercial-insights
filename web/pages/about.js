import CommercialInsights from "components/pages/about/CommercialInsights";
import Hero from "components/pages/about/Hero";
import Team from "components/pages/about/Team";
import UnemploymentProcess from "components/pages/about/UnemploymentProcess";
import Head from "next/head";
const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <Hero />
      <Team />
      <CommercialInsights />
      <UnemploymentProcess />
    </>
  );
};

export default about;
