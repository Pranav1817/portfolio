/** @type {import('next').NextConfig} */
// const path = require('path');

const customConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.pdf$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[path][name].[ext]',
            outputPath: 'static/pdf/',
            publicPath: '/_next/static/pdf/',
          },
        },
      ],
    });

    return config;
  },
};

export default customConfig;
