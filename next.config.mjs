/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pexels.com' // first in url as www.facebook.com/
      }
    ]
  }
}

export default nextConfig
