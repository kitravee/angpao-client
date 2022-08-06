/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  corePlugins: {
    preflight: false,
  },
  important: '#__next',
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: {
        ag1: '#DB5229',
        ag2: '#FFBB16',
        ag3: '#E3D645',
        ag4: '#53A86F',
        ag5: '#1F685C',
      },
      fontFamily: {
        sans: ['Prompt', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    // require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
