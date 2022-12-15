/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    appDir: true
  },
  env: {
    server_url : "http://localhost:5000/api"
  }
}

module.exports = nextConfig
