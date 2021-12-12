import type { NextPage } from "next";

import CTASection from "components/samples/CTASection";
import SomeImage from "components/samples/SomeImage";
import SomeText from "components/samples/SomeText";

const Home: NextPage = () => {
  return (
    <>
      <SomeText />
      <SomeImage />
      <CTASection />
    </>
  );
};

export default Home;
