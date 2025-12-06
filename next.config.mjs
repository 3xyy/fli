/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'out',
  // Set turbopack.root to silence workspace root warning
  turbopack: {
    // Use process.cwd() instead of __dirname for ES module compatibility
    root: process.cwd(),
  },
  images: {
    unoptimized: true,
    // Removed deprecated 'domains' array as 'remotePatterns' is now preferred
    remotePatterns: [
      {
        protocol: "https",
        hostname: "source.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ext.same-assets.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "ugc.same-assets.com",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
