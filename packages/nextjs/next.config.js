// @ts-check

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["w3s.link"],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
  eslint: {
    ignoreDuringBuilds: process.env.NEXT_PUBLIC_IGNORE_BUILD_ERROR === "true",
  },
};

module.exports = nextConfig;
