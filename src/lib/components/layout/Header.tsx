import Link from "next/link";
import { FaHome } from "react-icons/fa";

import ThemeSelect from "./ThemeSelect";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100/80 backdrop-blur-md">
      <section className="wrapper mx-auto flex items-center justify-between py-2">
        <Link href="/" passHref>
          <a className="cursor-pointer text-lg font-bold">
            <FaHome />
          </a>
        </Link>
        <ThemeSelect />
      </section>

      <div className="h-1 bg-gradient-to-br from-primary to-accent" />
    </header>
  );
};

export default Header;
