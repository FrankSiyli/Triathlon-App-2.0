/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  variants: {
    extend: {
      padding: ["last"],
    },
  },
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
