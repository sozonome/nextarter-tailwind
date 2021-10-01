import ThemeSelect from "./ThemeSelect";

const Header = () => {
  return (
    <header className="z-10 bg-base-100 w-full sticky top-0">
      <section className="flex items-center justify-between wrapper mx-auto">
        <h4>nextstarter-daisy</h4>
        <ThemeSelect />
      </section>

      <div className="h-1 bg-gradient-to-br from-purple-600 to-red-500" />
    </header>
  );
};

export default Header;
