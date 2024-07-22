import { NextFederationPlugin } from '@module-federation/nextjs-mf'
/** @type {import('next').NextConfig} */

process.env.NEXT_PRIVATE_LOCAL_WEBPACK = true;

const nextConfig = {
  reactStrictMode: true,
  webpack: (config, options) => {
    const { isServer } = options;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'app',
        filename: 'static/chunks/remoteEntry.js',
        remotes: {
          header: `header@http://localhost:3002/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
          cart: `cart@http://localhost:3001/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        exposes: {},
        extraOptions: {
          exposePages: true,
        },
        force: true,
        eager:true,
      })
    );
    return config;
  }
}

export default nextConfig;
