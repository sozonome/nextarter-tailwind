import Link from "next/link";

import ThemeSelect from "./ThemeSelect";

const Header = () => {
  return (
    <header className="z-10 bg-base-100 w-full sticky top-0">
      <section className="flex items-center justify-between wrapper mx-auto">
        <Link href="/" passHref>
          <button type="button" className="cursor-pointer font-bold text-lg">
            nextarter-daisy
          </button>
        </Link>
        <ThemeSelect />
      </section>

      <div className="h-1 bg-gradient-to-br from-primary to-accent" />
    </header>
  );
};

export default Header;
