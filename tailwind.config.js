/** @type {import('tailwindcss').Config} */
/**
 * 100: For body background color
 * 200: For cards background color
 * 300: For chips buttons, dropdowns background color
 * 400: For sidebars, navbar background color
 * 500: For modal, dialogs background color
 * 600: For on background texts color
 */
const { nextui } = require("@nextui-org/react");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        "lavender-dark": {
          extend: "dark",
          colors: {
            background: "#272039",
            lavprimary: {
              100: "#7A5AF5",
              200: "#8C6CF7",
              300: "#9D7DF9",
              400: "#AD8FFA",
              500: "#BCA2FB",
              600: "#CAB4FD",
            },
            surface: {
              100: "#121212",
              200: "#282828",
              300: "#3F3F3F",
              400: "#575757",
              500: "#717171",
              600: "#8B8B8B",
            },
            surfaceMixed: {
              100: "#272039",
              200: "#3C354C",
              300: "#524B61",
              400: "#686276",
              500: "#807A8B",
              600: "#9893A1",
            },
          },
        },
      },
    }),
  ],
};
