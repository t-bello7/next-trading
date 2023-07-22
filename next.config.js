/** @type {import('next').NextConfig} */

import nextPWA from 'next-pwa'
const withPWA = nextPWA({
  dest: 'public',
  register: true,
  skipWaiting: true,
})

export default withPWA({
  reactStrictMode: true,
  transpilePackages: ['@react-financial-charts', 'react-financial-charts'],
})

 
