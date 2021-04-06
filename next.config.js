module.exports = {
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
  reactStrictMode: true,
};
