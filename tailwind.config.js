const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig} */
module.exports = {
  mode: "jit",
  purge: ["src/**/*.{js,jsx,ts,tsx}"],
  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  theme: {
    fontFamily: {
      sans: ['"Plus Jakarta Sans"', ...fontFamily.sans],
    },
  },
};
