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
        source: "/prices",
        destination: "/courses",
        permanent: false,
      },
      {
        source: "/prices/:slug*",
        destination: "/courses",
        permanent: false,
      },
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

