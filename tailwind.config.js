/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      fontFamily:{
        rubik:["rubik-Regular", "sans-serif"],
        "rubik-bold":["rubik-Bold", "sans-serif"],
        "rubik-medium":["rubik-Medium", "sans-serif"],
        "rubik-light":["rubik-Light", "sans-serif"],
        "rubik-semibold":["rubik-SemiBold", "sans-serif"],
        "rubik-extrabold":["rubik-ExtraBold", "sans-serif"],
      },
      colors:{
        primary:{
          100:"#0061ff0a",
          200:"#0061ff1a",
          300:"#0061ff" 
        },
        accent:{
          100:"fbfbfd",

        },
        black:{
          DEFAULT:"#000000",
          100:"#8c8e98",
          200:"#666876",
          300:"#191d31"
        }
      }
    },
  },
  plugins: [],
}