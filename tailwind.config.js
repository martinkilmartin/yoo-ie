module.exports = {
  mode: 'jit',
  purge: ['./src/{layouts,pages,components}/**/*.{j,t}s*'],
  darkMode: 'media',
  theme: {
    extend: {
      screens: {
        '3xl': '1600px',
        '4xl': '1800px',
        '5xl': '2000px',
        '6xl': '2200px',
        '7xl': '2400px',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}
