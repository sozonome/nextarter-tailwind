const themes = ["dark", "light", "synthwave", "dracula"];

const ThemeSelect = () => {
  return (
    <select data-choose-theme className="select select-bordered">
      {themes.map((theme) => (
        <option value={theme} key={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelect;
