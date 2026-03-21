/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orbitDark: '#0B0F19',
        orbitAccent: '#3B82F6', // Modern blue color එකක්
      }
    },
  },
  plugins: [],
}
