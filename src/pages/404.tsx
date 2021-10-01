import Image from "next/image";
import Link from "next/link";

import AnchorLink from "components/ui/AnchorLink";

const Page404 = () => {
  return (
    <>
      <div className="grid gap-2 text-center p-12">
        <Image src="/assets/404 Error-amico.svg" width={400} height={400} />
        <AnchorLink href="https://storyset.com/web">
          Web illustrations by Storyset
        </AnchorLink>
      </div>

      <div className="grid gap-2 text-center">
        <h3>Page not Found</h3>
        <p>It&apos;s Okay!</p>

        <div>
          <Link href="/" passHref>
            <button type="button" className="btn btn-primary">
              Let&apos;s Go Back
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Page404;
