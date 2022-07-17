/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      animation: {
        'pulse-fast': 'pulse 2s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [ "luxury" ],
  },
}

// "[data-theme=luxury]": {
//   primary: "#ffffff", white
//   secondary: "#152747", dark-blue
//   accent: "#513448", dark-pink
//   neutral: "#171618", dark-grey
//   "neutral-content": "#dca54c", bright-orange
//   "base-100": "#09090b", black, bg-color
//   "base-200": "#171618", dark-grey
//   "base-300": "#2e2d2f", lighter-gray
//   "base-content": "#dca54c", orange, text-color
//   info: "#66c6ff", blue
//   success: "#87d039", green
//   warning: "#e2d562", light yellow
//   error: "#ff6f6f", pinkish red
// } 