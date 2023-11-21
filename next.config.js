/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Warning: This allows production builds to successfully complete even if
        // your project has ESLint errors.
        ignoreDuringBuilds: true,
      },
}


module.exports = {
  async rewrites() {
    return [
      {
        source: '/login',
        destination: 'https://hobby-zone.kirellos.com',
      },
    ]
  },
}

// module.exports = nextConfig
