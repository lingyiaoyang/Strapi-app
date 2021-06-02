const path = require('path');
require('dotenv').config();

module.exports = {
  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },
  images: {
    imageSizes: [16, 32, 48, 64, 96],
    path: '/_next/image',
    loader: 'default',
    domains: [process.env.IMAGES_DOMAIN],
  },

  webpack: (config) => {
    config.resolve.alias['component'] = path.join(__dirname, 'component');

    config.resolve.alias['public'] = path.join(__dirname, 'public');

    return config;
  },
};
