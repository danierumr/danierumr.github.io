/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  // This ensures that the base path is correctly set for GitHub Pages
  // If your repo is named "portfolio", uncomment and update this:
  // basePath: '/portfolio',
}

export default nextConfig
