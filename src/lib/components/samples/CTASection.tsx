import Image from "next/image";

const CTASection = () => {
  return (
    <div className="grid gap-2.5">
      <div className="flex items-center gap-2">
        <a
          className="btn rounded-3xl border-2 border-green-400 bg-gradient-to-br from-gray-100 to-green-200 font-semibold text-green-700 hover:from-gray-200 hover:to-green-200 hover:text-green-800"
          href="https://github.com/sozonome/nextarter-tailwind/generate"
          target="_blank"
          rel="noopener noreferrer"
        >
          Use This Template
        </a>

        <a
          href="https://vercel.com/import/git?s=https://github.com/sozonome/nextarter-tailwind"
          className="flex items-center"
        >
          <Image
            width={92}
            height={32}
            src="https://vercel.com/button"
            alt="Vercel deploy button"
          />
        </a>
      </div>

      <div>
        <a
          className="btn rounded-3xl text-xs font-semibold"
          href="https://github.com/sozonome/nextarter-tailwind"
          target="_blank"
          rel="noopener noreferrer"
        >
          Repository
        </a>
      </div>
    </div>
  );
};

export default CTASection;
