/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // For static export or custom deployment if needed
  },
};

module.exports = nextConfig;
