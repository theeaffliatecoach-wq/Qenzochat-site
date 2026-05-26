const isDev = process.env.NODE_ENV === 'development'

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: isDev,
})

module.exports = withPWA({
  reactStrictMode: true,

  allowedDevOrigins: ['192.168.100.58'],

  webpack(config) {
    return config
  },
})