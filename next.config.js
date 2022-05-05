/** @type {import('next').NextConfig} */
const nextConfig = {
  // Special headers.
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Fumino-Application',
            value: 'Miyuki',
          },
          {
            key: 'X-Fumino-Version',
            value: process.env.npm_package_version,
          },

          /**
           * Below are security headers. We are taking inspiration from Node.js's Helmet,
           * and as of 04/05/2022, they have 15 security headers in the package. We are using
           * them one by one, with the exception of disabling `X-Powered-By` (as we have no need for that),
           * `Strict-Transport-Security` (as the Vercel has already included them in the deployment platform).
           * and disabling `Content-Security-Policy` (still wrapping my head around the concept without sacrificing the visuals
           * in Next.js with a UI framework).
           *
           * The order of the middlewares are the same as Helmet's.
           */
          // Content Security Policy.
          // {
          //   key: 'Content-Security-Policy',
          //   value: '',
          // },

          // Cross-Origin-Embedder-Policy.
          {
            key: 'Cross-Origin-Embedder-Policy',
            value: 'require-corp',
          },

          // Opener policy.
          {
            key: 'Cross-Origin-Opener-Policy',
            value: 'same-origin',
          },

          // Resource policy.
          {
            key: 'Cross-Origin-Resource-Policy',
            value: 'same-origin',
          },

          // Expect-CT.
          {
            key: 'Expect-CT',
            value: '0',
          },

          // Manipulate referrer policy.
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },

          // Do not allow to sniff Content-Type.
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },

          // Isolate web app origins.
          {
            key: 'Origin-Agent-Cluster',
            value: '?1',
          },

          // Allow prefetching.
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },

          // Do not allow downloads on old IE versions.
          {
            key: 'X-Download-Options',
            value: 'noopen',
          },

          // Only allow iframes from same origin.
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },

          // Do not allow cross domain policy.
          {
            key: 'X-Permitted-Cross-Domain-Policies',
            value: 'none',
          },

          // Disable XSS protection, we use CSP.
          {
            key: 'X-XSS-Protection',
            value: '0',
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

module.exports = nextConfig;
