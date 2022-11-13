import Image from "next/image";
import Link from "next/link";

import AnchorLink from "lib/components/ui/AnchorLink";

const Page404 = () => {
  return (
    <>
      <div className="grid gap-2 p-12 text-center">
        <Image
          src="/assets/404 Error-amico.svg"
          width={400}
          height={400}
          alt="404 Illustration"
        />
        <AnchorLink href="https://storyset.com/web">
          Web illustrations by Storyset
        </AnchorLink>
      </div>

      <div className="grid gap-2 text-center">
        <h3>Page not Found</h3>
        <p>It&apos;s Okay!</p>

        <div>
          <Link href="/" className="btn-primary btn">
            Let&apos;s Go Back
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
