/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('../img/background.png')",
        'blog1': "url('../img/blog_bg1.jfif')",
        'blog2': "url('../img/blog_bg2.jfif')",
        'blog3': "url('../img/blog_bg3.jfif')",
        'blog4': "url('../img/blog_bg4.jfif')",
        'blog5': "url('../img/blog_bg5.jfif')",
      },
      fontFamily: {
        'mons': ['Montserrat', 'sans-serif'],
        'lato': ['Lato', 'sans-serif'],
      },
      fontSize: {
        's': '8px',
      },
      colors: {
        'black-tr20': 'rgba(0, 0, 0, 0.2)',
        'prl': '#8D4FDB',
        'prl-h': 'rgba(128, 76, 193, 1)',
        'gr': '#333333',
        'gr2': '#f1f1f1',
        'gr3': '#A9AFB3',
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}