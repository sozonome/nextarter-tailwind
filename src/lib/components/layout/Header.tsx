import Link from "next/link";

import ThemeSelect from "./ThemeSelect";

const Header = () => {
  return (
    <header className="sticky top-0 z-10 w-full bg-base-100">
      <section className="wrapper mx-auto flex items-center justify-between">
        <Link href="/" passHref>
          <button type="button" className="cursor-pointer text-lg font-bold">
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
