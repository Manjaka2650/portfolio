/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "manjaka2650.github.io",
        pathname: "/portfolio/images/**",
      },
    ],
  },
};

export default nextConfig;
