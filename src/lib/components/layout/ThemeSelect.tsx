const themes = [
  "dracula",
  "synthwave",
  "dark",
  "light",
  "cupcake",
  "bumblebee",
  "emerald",
  "corporate",
  "retro",
  "cyberpunk",
  "valentine",
  "halloween",
  "garden",
  "forest",
  "aqua",
  "lofi",
  "pastel",
  "fantasy",
  "wireframe",
  "black",
  "luxury",
];

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
