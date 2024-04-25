/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ["Poppins", 'sans-serif'],
      'serif': ["Poppins", 'sans-serif'],
      'mono': ["Poppins", 'sans-serif'],
      'display': ["Poppins", 'sans-serif'],
      'body': ["Poppins", 'sans-serif'],
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

