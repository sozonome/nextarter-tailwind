import Image from "next/image";

import AnchorLink from "lib/components/ui/AnchorLink";

const SomeImage = () => {
  return (
    <>
      <div className="grid gap-2 p-12 text-center">
        <Image
          width={320}
          height={320}
          src="/assets/Website setup-amico.svg"
          alt="launch image"
        />

        <AnchorLink href="https://storyset.com/web">
          Web illustrations by Storyset
        </AnchorLink>
      </div>
    </>
  );
};

export default SomeImage;
