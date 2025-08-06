/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "Content-Security-Policy",
            value: `
              default-src 'self';
              script-src 'self' 'unsafe-inline' 'unsafe-eval'
                https://www.googletagmanager.com
                https://www.google-analytics.com
                https://connect.facebook.net
                https://www.googleadservices.com
                https://googleads.g.doubleclick.net
                https://www.facebook.com
                https://www.google.com;
              style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
              font-src 'self' https://fonts.gstatic.com data:;
              img-src 'self' data: blob:
                https://www.civilproducts.co.th
                https://res.cloudinary.com
                https://www.facebook.com
                https://www.google-analytics.com
                https://www.googleadservices.com
                https://googleads.g.doubleclick.net
                https://www.google.com
                https://www.google.co.th;
              connect-src 'self'
                https://www.google-analytics.com
                https://connect.facebook.net
                https://www.googleadservices.com
                https://googleads.g.doubleclick.net
                https://res.cloudinary.com
                https://www.google.com;
              frame-src https://www.google.com https://www.youtube.com;
            `.replace(/\s{2,}/g, ' ').trim(),
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "SAMEORIGIN",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
        ],
      },
    ];
  },
};

export default nextConfig;