/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
      extend: {
          backgroundImage: {background: "url(/src/assets/hero.png)"}
      },
  },
  darkMode: 'class',
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
}