/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ext.same-assets.com',
      },
    ],
  },
  // TypeScript y ESLint ahora habilitados para mejor calidad de código
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  // Headers de seguridad que permiten embeds de Google Drive y YouTube
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "frame-src 'self' https://drive.google.com https://www.youtube.com https://youtube.com; frame-ancestors 'self';"
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
