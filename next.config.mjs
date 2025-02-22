/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "192.168.12.158",
      "guesty-listing-images.s3.amazonaws.com",
      "assets.guesty.com",
      "res.cloudinary.com",
      "139.59.58.153",
      "10.0.80.85",
    ],
    remotePatterns: [
      {
        protocol: "http",
        hostname: "164.90.163.42",
        port: "4000",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
