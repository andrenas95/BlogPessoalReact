/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
],
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('https://ik.imagekit.io/andrenas95/blog_pessoal/bd-dark.jpg')",

      }
    },
  },
  plugins: [],
}

