/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "sidebar-bg": "#0f0f0f",
        "layout-bg": "#0B0B0B",
        "primary": "#747477",
        "secondary": "#30AB4A",
        "mine-shaft": "rgb(51 51 51 / 1)",
        "nav-hover": "#292929",
      }
    },
  },
  plugins: [],
}

