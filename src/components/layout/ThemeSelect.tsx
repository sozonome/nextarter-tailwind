const themes = ["dark", "synthwave", "dracula"];

const ThemeSelect = () => {
  return (
    <select data-choose-theme className="select">
      <option value="">default</option>

      {themes.map((theme) => (
        <option value={theme} key={theme}>
          {theme}
        </option>
      ))}
    </select>
  );
};

export default ThemeSelect;
