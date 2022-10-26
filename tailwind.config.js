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
      },
      "gridTemplateColumns": {
        "colonne2": "grid-cols-[repeat(auto-fit,minmax(285px,1fr))]"
      },
      "boxShadow": {
        "contact": "inset 7px 5px 10px 3px rgba(0,0,0,0.25)"
      },
      "fontFamily": {
        "titillium-web": "Titillium Web",
        "syncopate": "Syncopate"
       },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    formKitTailwind,
    require("@headlessui/tailwindcss"),
  ],
};
