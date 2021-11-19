/* eslint-disable quote-props */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ['Mulish', ...defaultTheme.fontFamily.sans],
      },
      width: { '100': '100px', '286': '288px', '292': '292px', '359': '359px' },
      height: {
        '100': '100px',
        '286': '288px',
        '292': '292px',
        '359': '359px',
      },
    },
    colors: {
      ...defaultTheme.colors,
      agatha: {
        100: '#44444F',
        200: '#D5D5DC',
        300: '#B5B5BE',
        400: '#92929D',
      },
    },
  },
  variants: {
    extend: {
      borderWidth: ['hover', 'focus'],
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        agatha: {
          primary: '#7735d5',
          'primary-focus': '#7735D5',
          'primary-content': '#ffffff',
          secondary: '#00b49a',
          'secondary-focus': '#00b2a6',
          'secondary-content': '#ffffff',
          accent: '#37cdbe',
          'accent-focus': '#2aa79b',
          'accent-content': '#ffffff',
          neutral: '#1c1c24',
          'neutral-focus': '#292932',
          'neutral-content': '#ffffff',
          'base-100': '#13131a',
          'base-200': '#1c1c24',
          'base-300': '#292932',
          'base-content': '#fafafb',
          info: '#29a3f2',
          success: '#17be7b',
          warning: '#f57e3a',
          error: '#eb4343',
        },
      },
    ],
  },
}
