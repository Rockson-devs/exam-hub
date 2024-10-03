/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // Add paths to your content files here
    "./src/app/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/styles/**/*.{css}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

// import type { Config } from "tailwincss";

// const config: Config = {
//   content: [
//     "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
//     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         // background: "var(--background)",
//         // foreground: "var(--foreground)",
//         background: "#A9A9A9",
//         foreground: "#696969",
//       },
//     },
//   },
//   plugins: [],
// };
// export default config;

// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./src/**/*.{js,jsx,ts,tsx}", // Adjust based on your file structure
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// };
