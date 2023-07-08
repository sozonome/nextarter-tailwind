import type { NextPage } from 'next';

import CTASection from '@/lib/components/samples/CTASection';
import SomeText from '@/lib/components/samples/SomeText';

const Home: NextPage = () => {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-8 text-center">
      <SomeText />
      <CTASection />
    </div>
  );
};

export default Home;
