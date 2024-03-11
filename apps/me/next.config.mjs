import { NextFederationPlugin } from '@module-federation/nextjs-mf';

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    config.plugins.push(
      new NextFederationPlugin({
        name: 'me',
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './injector': './src/injector.tsx',
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
