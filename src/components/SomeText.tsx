import { FiInfo } from "react-icons/fi";

const SomeText = () => {
  return (
    <div className="grid gap-4">
      <h2>Hello</h2>

      <div className="alert">
        <div className="flex-1 gap-2">
          <span>
            <FiInfo className="text-lg" />
          </span>
          <span>
            This is a Next.js app with TailwindCSS + daisy-UI + headless-UI and
            TypeScript setup.
          </span>
        </div>
      </div>
    </div>
  );
};

export default SomeText;
