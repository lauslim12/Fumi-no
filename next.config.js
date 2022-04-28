/** @type {import('next').NextConfig} */
module.exports = {
  // Special headers.
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'X-Fumino-Application',
            value: process.env.NEXT_PUBLIC_APP_VERSION_NAME,
          },
          {
            key: 'X-Fumino-Version',
            value: process.env.NEXT_PUBLIC_APP_VERSION_NUMBER,
          },
        ],
      },
    ];
  },

  // Enable minification.
  swcMinify: true,

  // Enable strict mode.
  reactStrictMode: true,
};
