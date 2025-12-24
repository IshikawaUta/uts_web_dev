import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // Pastikan tidak ada typo di nama key
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'placehold.co' },
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'picsum.photos' },
      { protocol: 'https', hostname: 'res.cloudinary.com' },
    ].map(pattern => ({ ...pattern, pathname: '/**', port: '' })),
  },
};

export default nextConfig;