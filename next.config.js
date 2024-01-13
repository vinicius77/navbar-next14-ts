/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "backend.choicely.com",
        port: "",
        pathname: "/images/**",
      },
    ],
  },
};

module.exports = nextConfig;
