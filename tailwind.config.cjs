/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          darkBlue: "hsl(233, 26%, 24%)",
          limeGreen: "hsl(136, 65%, 51%)",
          brightCyan: "hsl(192, 70%, 51%)",
          text: "hsl(233, 21%, 66%)"
        },
        neutral: {
          grayishBlue: "hsl(233, 8%, 62%)",
          lightBlue: "hsl(220, 16%, 96%)",
          lightGray: "hsl(0, 0%, 98%)",
          white: "hsl(0, 0%, 100%)"
        }
      }
    },
  },
  plugins: [],
}
