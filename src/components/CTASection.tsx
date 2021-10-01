import Image from "next/image";
import { FaGithub } from "react-icons/fa";

import AnchorLink from "./ui/AnchorLink";

const CTASection = () => {
  return (
    <div className="text-center grid gap-4">
      <div className="flex my-4 justify-center gap-4">
        <AnchorLink href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-daisy">
          <Image
            src="https://vercel.com/button"
            width={92}
            height={32}
            alt="Vercel deploy button"
          />
        </AnchorLink>

        <AnchorLink href="https://app.netlify.com/start/deploy?repository=https://github.com/sozonome/nextarter-daisy">
          <Image
            src="https://www.netlify.com/img/deploy/button.svg"
            width={146}
            height={32}
            alt="Netlify deploy button"
          />
        </AnchorLink>
      </div>

      <div>
        <code className="bg-base-300 p-1 rounded-lg">{`npx degit sozonome/nextarter-daisy <YOUR_APP_NAME>`}</code>
      </div>

      <div className="grid gap-2">
        <div>
          <AnchorLink
            href="https://github.com/sozonome/nextarter-daisy/generate"
            className="btn btn-primary"
          >
            Use This Template
          </AnchorLink>
        </div>

        <div>
          <AnchorLink
            href="https://github.com/sozonome/nextarter-daisy"
            className="btn btn-accent btn-sm gap-2"
          >
            Open in Github
            <FaGithub />
          </AnchorLink>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
