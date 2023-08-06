/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'primarywhite': "#FEFEFE",
        'primarypink': "#FF6600",
        'primaryyellow': "#FFFFF1",
        'primaryblack': "#0C0A0A",
        'secondaryblack': "#1A1A1A",
        'primarygray': "#F2F3F5",
      },
      fontFamily: {
        tillitium: ["Titillium Web, sans-serif"],
        roboto: ["Roboto', sans-serif"],
        "roboto-slab": ["Roboto Slab', sans-serif"],
      }
    },
  },
  plugins: [],
}

