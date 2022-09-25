/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com', 'res.klook.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',

  // register: true,
  // scope: '/app',
  // sw: 'service-worker.js',
});

const nextPlugins = [withPWA];

module.exports = withPlugins([nextConfig, nextPlugins]);
