import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images: {
    remotePatterns: [
      {
        protocol: 'http', // Use 'https' if your local WP uses HTTPS
        hostname: 'localhost',
        port: '10008', // Important: Specify the port used by your WP instance
        pathname: '/wp-content/uploads/**', // Allows any image within the uploads folder
      }, ]
    }
};

export default nextConfig;
