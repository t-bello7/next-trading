/** @type {import('next').NextConfig} */
// const withPWA = require('next-pwa');

// const nextConfig = withPWA({
//   pwa: {
//     dest: 'public',

//   },
//   reactStrictMode: true,
// });

// module.exports = nextConfig;

const withPWA = require('next-pwa')({
    dest: 'public',
    register: true,
    skipWaiting: true,
  })
  
  module.exports = withPWA({
    reactStrictMode: true,
  })