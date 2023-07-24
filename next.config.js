/** @type {import('next').NextConfig} */

const prod = process.env.NODE_ENV === 'production'

import nextPWA from 'next-pwa'
const withPWA = nextPWA({
  dest: 'public',
  register: true,
  disable: prod ? false : true,
  skipWaiting: true,
})

export default withPWA({
  reactStrictMode: true,
  transpilePackages: ['@react-financial-charts', 'react-financial-charts'],
})

 
