/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['external-content.duckduckgo.com'],
  },
};

module.exports = nextConfig
