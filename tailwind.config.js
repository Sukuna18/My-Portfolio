/** @type {import('tailwindcss').Config} */
export default {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
      "./node_modules/flowbite/**/*.js"
  ],
  plugins: [
    
    // eslint-disable-next-line no-undef
    require('flowbite/plugin')
  ],
  darkMode: 'class',
}