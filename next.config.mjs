/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
    ],
  },
  async redirects() {
    return [
      {
        source: "/course",
        destination: "/courses",
        permanent: true,
      },
      {
        source: "/course/:slug*",
        destination: "/courses/:slug*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;

