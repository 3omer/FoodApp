const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#4E60FF',
        'primary-light': '#F3F4FF',
        'black': "#2B2B43",
        'gray': '#545563',
        'gray-lightest': '#EDEEF2',
        'light': '#C7C8D2',
        'white': '#fff'
      },
    },
  },

  plugins: [require('@tailwindcss/forms', {
    strategy: 'base', // only generate global styles
    // strategy: 'class', // only generate classes
  })],
};
