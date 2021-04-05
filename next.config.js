module.exports = {
  async headers() {
    return [
      {
        source: '/:path*{/}?',
        headers: [
          {
            key: 'X-Fumino-Application',
            value: 'Alicia',
          },
        ],
      },
    ];
  },
  reactStrictMode: true,
};
