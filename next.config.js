/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    loader: "custom",
    domains: [`cdn.iwantalipstick.com`],
  },
};

module.exports = nextConfig;
