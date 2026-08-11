/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  trailingSlash: false,
  async redirects() {
    return [
      {
        source: '/contacto',
        destination: '/#contacto',
        permanent: true,
      },
      {
        source: '/contacto/',
        destination: '/#contacto',
        permanent: true,
      },
      {
        source: '/conctacto',
        destination: '/#contacto',
        permanent: true,
      },
      {
        source: '/conctacto/',
        destination: '/#contacto',
        permanent: true,
      },
      {
        source: '/logistica',
        destination: '/servicios/concreto-mixer-lima',
        permanent: true,
      },
      {
        source: '/logistica/',
        destination: '/servicios/concreto-mixer-lima',
        permanent: true,
      },
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

export default nextConfig
