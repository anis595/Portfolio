/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blacked: "#172121",
        whited: "#f3f9e3",
        yellowed: "#ffc600",
      },
      screens: {
        phone: "390px",
        tablet: "834px",
        laptop: "1440px",
        desktop: "1920px",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          phone: "3rem",
          tablet: "3rem",
          laptop: "4rem",
          desktop: "4rem",
        },
        screens: {
          // phone: "390px",
          tablet: "834px",
          laptop: "1300px",
          desktop: "1300px",
        },
      },
    },
    plugins: [],
    fontFamily: {
      play: ["Playfair Display", "serif"],
      sans: ["Montserrat", "sans-serif"],
      ubun: ["Ubuntu", "sans-serif"],
    },
  },
};
