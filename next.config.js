/** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    mongodb_username: 'USERNAME',
    mongodb_password: 'PASSWORD',
    mongodb_db: 'DB',
    NEXTAUTH_URL: 'https://nextjs-dashboard-teal-pi-75.vercel.app/api/auth',
    NEXTAUTH_SECRET: 'oaLiqG+PIwZXL3zZ9VbEMRM/3NocWo7iT68BICEbMdU=',
  },
};