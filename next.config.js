/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    STORE_SERVICE_URL: "https://api.escuelajs.co/api",
  },
  images: {
    remotePatterns: [
      // {
      //   protocol: "https",
      //   hostname: "picsum.photos",
      //   port: "",
      //   pathname: "/**",
      // },
      {
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
