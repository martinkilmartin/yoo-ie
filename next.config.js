const withPWA = require('next-pwa')

module.exports = withPWA({
  extends: ['plugin:@next/next/recommended'],
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
})
