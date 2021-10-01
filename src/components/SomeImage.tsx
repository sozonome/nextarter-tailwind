import Image from "next/image";

import AnchorLink from "components/ui/AnchorLink";

const SomeImage = () => {
  return (
    <>
      <div className="grid gap-2 text-center p-12">
        <Image
          width={400}
          height={400}
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
