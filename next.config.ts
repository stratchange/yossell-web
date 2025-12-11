import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  output: 'export', // 👈 this replaces `next export`
};

export default nextConfig;
