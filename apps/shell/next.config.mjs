import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'shell',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          about: 'about@http://localhost:3001/remoteEntry.js',
        },
        shared: {
          '@career-up/ui-kit': {
            singleton: true,
          },
        },
      })
    );

    return config;
  },
};

export default nextConfig;
