/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    env: {
        DB_CONNECT_URI: process.env.DB_CONNECT_URI,
        DB_TEST_COLLECTION: process.env.DB_TEST_COLLECTION,
    },
}

module.exports = nextConfig
