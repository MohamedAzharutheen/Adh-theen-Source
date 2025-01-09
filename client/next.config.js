// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
// const prod = "production" === process.env.NODE_ENV;
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   productionBrowserSourceMaps: true,
//   env: {
//     url: prod ? "https://adh-theen-source.vercel.app" : "http://localhost:5000",
//     dev: !prod ,
//     phoneDis: '+91 950077 1134',
//     phoneNum: '+91 9500771134' ,
//     emailDis:'contact@aldeentoursandtravels@gmail.com',
//     emailID:'aldeentoursandtravels@gmail.com'
//   },

// async headers() {
//   return [
//     {
//       source: "/api/:path*",
//       headers: [
//         { key: "Access-Control-Allow-Credentials", value: "true" },
//         { key: "Access-Control-Allow-Origin", value: "https://adh-theen-frontned.vercel.app" }, // Replace with your frontend URL
//         { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//         { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//       ]
//     }
//   ];
// }


//  module.exports = nextConfig;




// const prod = process.env.NODE_ENV === "production";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
//   productionBrowserSourceMaps: true,
//   env: {
//     url: prod ? "https://adh-theen-source.vercel.app" : "http://localhost:5000",
//     dev: !prod,
//     phoneDis: "+91 950077 1134",
//     phoneNum: "+91 9500771134",
//     emailDis: "contact@aldeentoursandtravels@gmail.com",
//     emailID: "aldeentoursandtravels@gmail.com",
//   },
//   async headers() {
//     return [
//       {
//         source: "/api/:path*",
//         headers: [
//           { key: "Access-Control-Allow-Credentials", value: "true" },
//           { key: "Access-Control-Allow-Origin",   value: prod
//             ? "https://adh-theen-frontend.vercel.app"
//             : "http://localhost:8080", },
//           { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
//           { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token,Authorization, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
//         ],
//       },
//     ];
//   },
// };

// module.exports = nextConfig;



const prod = process.env.NODE_ENV === "production";

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  productionBrowserSourceMaps: true,
  images: {
    domains: ['res.cloudinary.com'], // Add Cloudinary's domain here
  },
  env: {
    url: prod ? "https://api.aththeen.in" : "http://localhost:5000",
    dev: !prod,
    phoneDis: "+91 950077 1134",
    phoneNum: "+91 9500771134",
    emailDis: "contact@aldeentoursandtravels@gmail.com",
    emailID: "aldeentoursandtravels@gmail.com",
  },
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Credentials", value: "true" },
          { key: "Access-Control-Allow-Origin",   value: prod
           ?  "https://www.aththeen.in/" // ? "https://www.aththeen.in/"
            : "http://localhost:8080", },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
          { key: "Access-Control-Allow-Headers", value: "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version" },
        ],
      },
    ];
  },
};

module.exports = nextConfig;

