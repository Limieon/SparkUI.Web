/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        optimizePackageImports: ['@mantine/core', '@mantine/hooks']
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'mfiles.alphacoders.com',
                port: '',
                pathname: '/**'
            }
        ]
    }
}

export default nextConfig
