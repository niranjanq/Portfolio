// /** @type {import('tailwindcss').Config} */
// export default {
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
module.exports = {
  darkMode: "class", // Allows toggling dark mode with a class
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"], // Make sure your files are properly included
  theme: {
    extend: {},
  },
  plugins: [],
};
