// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const prod = "production" === process.env.NODE_ENV;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  env: {
    url: prod ? "https://www.domain.com" : "http://localhost:5000",
    dev: !prod ,
    phoneDis: '+91 950077 1134',
    phoneNum: '+91 9500771134' ,
    emailDis:'contact@aldeentoursandtravels@gmail.com',
    emailID:'aldeentoursandtravels@gmail.com'
  },

  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin", value: "https://www.domain.com" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ]
      },
      // {
      //   source: '/:all*(svg|jpg|png)',
      //   locale: false,
      //   headers: [
      //     {
      //       key: 'Cache-Control',
      //       value: 'public, max-age=60000, must-revalidate',
      //     }
      //   ],
      // },
    ]
},
  };



export default nextConfig;

