import type { NextPage } from "next";

import CTASection from "lib/components/samples/CTASection";
import SomeImage from "lib/components/samples/SomeImage";
import SomeText from "lib/components/samples/SomeText";

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
