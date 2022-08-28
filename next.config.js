/** @type {import('next').NextConfig} */
const withPlugins = require('next-compose-plugins');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
};

const withPWA = require('next-pwa')({
  dest: 'public',
});

const nextPlugins = [withPWA];

module.exports = withPlugins([nextConfig, nextPlugins]);
