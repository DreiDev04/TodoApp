/** @type {import('tailwindcss').Config} */

const primary = "#52B69A";
const primary_2 = "#76C893";
const secondary = "#FFA92C";
const secondary_2 = "#FFC570";
const tertiary = "#0891B2";
const dark = "#1F1F1F";
const dark_2 = "#232323";
const dark_3 = "#2A2A2A";
const dark_4 = "#2E2E2E"; //hover
const light = "#FAFAFA";
const light_2 = "#F4F4F4";
const light_3 = "#373737";
const light_4 = "#404E4D";
const neutral = "#0C0C20";

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/lib/esm/**/*.js',
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/tw-elements-react/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/tailwind-datepicker-react/dist/**/*.js",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px", // Extra small screens, default: 576px
        sm: "480px", // Small screens, default: 576px
        md: "768px", // Medium screens, default: 768px
        lg: "976px", // Large screens, default: 992px
        xl: "1200px", // Extra-large screens, default: 1200px
      },
      colors: {
        primary: {
          1: primary,
          2: primary_2,
        },
        secondary: {
          1: secondary,
          2: secondary_2,
        },
        tertiary:{
          1: tertiary,
        },
        dark: {
          1: dark,
          2: dark_2,
          3: dark_3,
          4: dark_4,
        },
        light: {
          1: light,
          2: light_2,
          3: light_3,
          4: light_4,
        },
        neutral: {
          1: neutral,
        },
      },
    },
  },
  plugins: [
    require("flowbite/plugin"), 
    require("tw-elements/dist/plugin.cjs"),
    require("tw-elements-react/dist/plugin.cjs"),
  ],
  darkMode: "class"
};
