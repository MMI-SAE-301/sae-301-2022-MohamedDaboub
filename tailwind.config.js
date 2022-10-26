const formKitTailwind = require("@formkit/themes/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors:{
        "Color": {
         "grisfoncé": "#262222",
         "Bluefoncé": "#363553",
         "white": "#ffffff",
         "vertfoncé": "#609677",
         "Marronfoncé": "#2F2828"
        },
       },
      borderRadius: {
        "borderRadius": {
          "none": "0",
          "xs": "0.3125rem",
          "sm": "0.5590307712554932rem",
          "default": "0.5636160969734192rem",
          "lg": "1.9805936813354492rem"
         }
      }
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
