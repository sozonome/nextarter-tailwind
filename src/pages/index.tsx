import type { NextPage } from "next";

import CTASection from "components/CTASection";
import SomeImage from "components/SomeImage";
import SomeText from "components/SomeText";

const Home: NextPage = () => {
  return (
    <div className="w-full">
      <SomeText />
      <SomeImage />
      <CTASection />
    </div>
  );
};

export default Home;
